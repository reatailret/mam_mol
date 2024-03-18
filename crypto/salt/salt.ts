
	
	/** 16 byte */
	function $mol_crypto_salt() {
		return $mol_crypto_native.getRandomValues(
			new Uint8Array( 16 )
		)
	}
	


 export {$mol_crypto_salt}