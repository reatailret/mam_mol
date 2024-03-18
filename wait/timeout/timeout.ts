
	
	function $mol_wait_timeout_async( this: $, timeout: number ) {
		const promise = $mol_promise()
		const task = new $.$mol_after_timeout( timeout , ()=> promise.done() )
		return Object.assign( promise, {
			destructor: ()=> task.destructor()
		} )
	}
	
	function $mol_wait_timeout( this: $, timeout: number ) {
		return $.$mol_wire_sync( $ ).$mol_wait_timeout_async( timeout )
	}
	


 export {$mol_wait_timeout_async,$mol_wait_timeout}
