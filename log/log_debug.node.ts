

	let debug : ()=> void
	function $mol_log_debug( next = debug ) {
		return debug = next
	}



 export {$mol_log_debug}