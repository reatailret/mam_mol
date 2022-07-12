namespace $.$$ {
	export class $mol_book2_catalog extends $.$mol_book2_catalog {
		
		@ $mol_mem
		pages() {
			return [
				this.Menu(),
				... $mol_maybe( this.Spread() ),
			]
		}
		
		@ $mol_mem
		links() {
			return Object.keys( this.spreads() ).map( spread => this.Link( spread ) )
		}
		
		Spread() {
			return this.spreads()[ this.spread() ]
		}
		
		@ $mol_mem
		spread( next?: string ) {
			return this.$.$mol_state_arg.value( this.param(), next ) ?? ''
		}
		
		arg( spread: string ) {
			return { [ this.param() ]: spread || null }
		}
		
		spread_close_arg() {
			return { [ this.param() ]: null }
		}
		
		spread_title( spread: string ) {
			return this.spreads()[ spread ].title()
		}
		
	}
}
