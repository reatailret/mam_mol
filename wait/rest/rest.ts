
	
	function $mol_wait_rest_async( this: $ ) {
		return new Promise( done => {
			new this.$mol_after_work( 16 , ()=> done( null ) )
		} )
	}
	
	function $mol_wait_rest( this: $ ) {
		return this.$mol_wire_sync( this ).$mol_wait_rest_async()
	}
	


 export {$mol_wait_rest_async,$mol_wait_rest}