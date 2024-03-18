
	
	function $mol_base64_ae_encode( buffer: Uint8Array ) {
		return $mol_base64_encode( buffer ).replace( /\+/g, 'æ' ).replace( /\//g, 'Æ' ).replace( /=/g, '' )
	}
	
	function $mol_base64_ae_decode( str: string ) {
		return $mol_base64_decode( str.replace( /æ/g, '+' ).replace( /Æ/g, '/' ) )
	}
	


 export {$mol_base64_ae_encode,$mol_base64_ae_decode}