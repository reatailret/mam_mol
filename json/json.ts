

	function $mol_json_from_string( str: string ) {
		return JSON.parse( str )
	}

	function $mol_json_to_string( str: string ) {
		return JSON.stringify( str, null, '\t' )
	}



 export {$mol_json_from_string,$mol_json_to_string}