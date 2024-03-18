

	/// @todo right orderinng
	let $mol_after_mock_queue = [] as ( ()=> void )[]

	function $mol_after_mock_warp() {
		const queue = $mol_after_mock_queue.splice( 0 )
		for( const task of queue ) task()
	}

	class $mol_after_mock_commmon extends $mol_object2 {

		promise = Promise.resolve()
		cancelled = false
		id : any

		constructor( public task : ()=> void ) {
			super()
			$mol_after_mock_queue.push( task )
		}

		destructor() {
			const index = $mol_after_mock_queue.indexOf( this.task )
			if( index >= 0 )$mol_after_mock_queue.splice( index , 1 )
		}

	}

	class $mol_after_mock_timeout extends $mol_after_mock_commmon {

		constructor(
			public delay : number ,
			task : ()=> void ,
		) {
			super( task )
		}

	}
	


 export {$mol_after_mock_queue,$mol_after_mock_warp,$mol_after_mock_commmon,$mol_after_mock_timeout}