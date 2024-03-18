
	
	function $mol_js_eval( this: $, code: string ) {
		return new Function( '', code )()
	}
	


 export {$mol_js_eval}