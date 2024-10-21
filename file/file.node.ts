namespace $ {

	function stat_convert(stat: ReturnType<typeof $node.fs.statSync>): null | $mol_file_stat {
		
		if( !stat ) return null
		
		let type: $mol_file_type | undefined
		if (stat.isDirectory()) type = 'dir'
		if (stat.isFile()) type = 'file'
		if (stat.isSymbolicLink()) type = 'link'

		if (! type) return $mol_fail( new Error(`Unsupported file type`) )

		return {
			type, 
			size: Number(stat.size),
			atime: stat.atime,
			mtime: stat.mtime,
			ctime: stat.ctime
		}
	}

	function buffer_normalize(buf: Buffer): Uint8Array {
		return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength)
	}
	
	export enum $mol_file_mode_open {
		/** create if it doesn't already exist */
		create = $node.fs.constants.O_CREAT,
		/** truncate to zero size if it already exists */
		exists_truncate = $node.fs.constants.O_TRUNC,
		/** throw exception if it already exists */
		exists_fail = $node.fs.constants.O_EXCL,
		read_only = $node.fs.constants.O_RDONLY,
		write_only = $node.fs.constants.O_WRONLY,
		read_write = $node.fs.constants.O_RDWR,
		/** data will be appended to the end */
		append = $node.fs.constants.O_APPEND,
	}

	export class $mol_file_node extends $mol_file {

		static relative( path : string ) {
			return this.absolute( $node.path.resolve( this.base, path ).replace( /\\/g , '/' ) )
		}
		
		@ $mol_mem
		override watcher(reset?: null) {
			const watcher = $node.chokidar.watch( this.path() , {
				persistent : true ,
				ignored: path => /([\/\\]\.|___$)/.test( path ),
				depth :  0 ,
				ignoreInitial : true ,
				awaitWriteFinish: {
					stabilityThreshold: 100,
				},
			} )

			watcher
				.on( 'all' , (type, path) => this.watch_event(type, path) )
				.on( 'error' , $mol_fail_log )
			
			return {
				destructor() {
					watcher.close()
				}
			}

		}

		protected watch_event(type: string, path: string) {
			const file = $mol_file.relative( path.replace( /\\/g , '/' ) )
			const parent = type === 'change' ? this : file.parent()
			file.reset_schedule()
			parent.reset_schedule()
		}

		static reset_changed() {
			this.$.$mol_run.lock_run(() => super.reset_changed())
		}

		@ $mol_mem
		override stat(next? : $mol_file_stat | null, virt?: 'virt') {
			if (next === undefined) this.copy_sync()
			let stat = next
			const path = this.path()

			this.parent().watcher()
			
			if( virt ) return next ?? null
			
			try {
				stat = next ?? stat_convert($node.fs.statSync( path, { throwIfNoEntry: false } ))
			} catch( error: any ) {
				// For node < 14.7.0 compatible with throwIfNoEntry: false above
				if (error.code === 'ENOENT') return null
				error.message += '\n' + path
				return this.$.$mol_fail_hidden(error)
			}

			return stat
		}

		@ $mol_mem
		override ensure() {
			const path = this.path()

			try {
				$node.fs.mkdirSync( path )
			} catch( e: any ) {
				e.message += '\n' + path
				this.$.$mol_fail_hidden(e)
			}

		}
		
		override copy(to: string) {
			$node.fs.copyFileSync(this.path(), to)
		}

		@ $mol_action
		override drop() {
			$node.fs.unlinkSync( this.path() )
		}
		
		@ $mol_mem
		override buffer( next? : Uint8Array ) {

			const path = this.path()
			if( next === undefined ) {

				if( !this.stat() ) return new Uint8Array
				
				try {

					const prev = $mol_mem_cached( ()=> this.buffer() )
					
					next = buffer_normalize( $node.fs.readFileSync( path ) )

					if( prev !== undefined && !$mol_compare_array( prev, next ) ) {
						this.$.$mol_log3_rise({
							place: `$mol_file_node.buffer()`,
							message: 'Changed' ,
							path: this.relate() ,
						})
					}

					return next

				} catch( error: any ) {

					error.message += '\n' + path
					return this.$.$mol_fail_hidden( error )

				}
				
			}
			
			this.parent().exists( true )
			
			const now = new Date
			this.stat( {
				type: 'file',
				size: next.length,
				atime: now,
				mtime: now,
				ctime: now,
			}, 'virt' )

			try {

				$node.fs.writeFileSync( path, next )

			} catch( error: any ) {

				error.message += '\n' + path
				return this.$.$mol_fail_hidden( error )

			}
			
			return next

		}
		@ $mol_mem
		override sub() : $mol_file[] {
			if (! this.exists() ) return []
			if ( this.type() !== 'dir') return []

			const path = this.path()
			this.stat()

			try {
				return $node.fs.readdirSync( path )
					.filter( name => !/^\.+$/.test( name ) )
					.map( name => this.resolve( name ) )
			} catch( e: any ) {
				e.message += '\n' + path
				return this.$.$mol_fail_hidden(e)
			}
		}
		
		override resolve( path : string ) {
			return ( this.constructor as typeof $mol_file ).relative( $node.path.join( this.path() , path ) )
		}
		
		override relate( base = ( this.constructor as typeof $mol_file ).relative( '.' )) {
			return $node.path.relative( base.path() , this.path() ).replace( /\\/g , '/' )
		}

		override append( next : Uint8Array | string ) {
			const path = this.path()
			try {
				$node.fs.appendFileSync( path , next )
			} catch( e: any ) {
				e.message += '\n' + path
				return this.$.$mol_fail_hidden(e)
			}
		}
		
		override open( ... modes: readonly ( keyof typeof $mol_file_mode_open )[] ) {
			return $node.fs.openSync(
				this.path(),
				modes.reduce( ( res, mode )=> res | $mol_file_mode_open[ mode ], 0 ),
			)
		}

	}

	$.$mol_file = $mol_file_node
}
