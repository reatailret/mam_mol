

	let context = null as null | ( ()=> void )
	function $mol_log_context( next = context ) {
		return context = next
	}



 export {$mol_log_context}