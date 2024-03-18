

	const decoders = {} as { [ key in $mol_charset_encoding ]?: TextDecoder }

	function $mol_charset_decode(
		buffer: BufferSource,
		encoding: $mol_charset_encoding = 'utf8',
	) {
		
		let decoder = decoders[ encoding ]
		if( !decoder ) decoder = decoders[ encoding ] = new TextDecoder( encoding )
		
		return decoder.decode( buffer )
	}



 export {$mol_charset_decode}