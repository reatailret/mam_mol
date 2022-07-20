namespace $ {
	
	let buffer = new Uint32Array(80)
	
	/** Fast small sync SHA-1 */
	export function $mol_crypto_hash( data: Uint8Array ) {
		
		const bits = data.byteLength << 3
		const bytes = ( ( bits + 64 >>> 9 ) << 4) + 16
		
		const words = new Int32Array( bytes )
		
		// LE -> BE
		for (var i = 0; i < data.length; i++ ) {
			words[ i >>> 2 ] |= data[i] << ( 24 - ( i << 3 ) & 0b11111 )
		}
		
		// Initial
        const hash = new Int32Array([ 1732584193, -271733879, -1732584194, 271733878, -1009589776 ])
		
		// Padding
		words[ bits >> 5 ] |= 0x80 << ( 24 - bits & 0b11111 )
		words[ bytes - 1 ] = bits

		// Digest
		for( let i = 0; i < words.length; i += 16 ) {
			
			let h0 = hash[0]
			let h1 = hash[1]
			let h2 = hash[2]
			let h3 = hash[3]
			let h4 = hash[4]

			for( let j = 0; j < 80; ++j ) {

				if( j < 16 ) {
					
					buffer[j] = words[ i + j ]
					
				} else {
					
					const shuffle = buffer[j-3] ^ buffer[j-8] ^ buffer[j-14] ^ buffer[j-16]
					buffer[j] = ( shuffle << 1 )|( shuffle >>> 31 )
					
				}
				
				const n1 = ( hash[0] << 5 )|( hash[0] >>> 27 )
				
				const n2 =
					
					j < 20
						? ( hash[1] & hash[2] | ~hash[1] & hash[3] ) + 1518500249
					
					: j < 40
						? ( hash[1] ^ hash[2] ^ hash[3] ) + 1859775393
					
					: j < 60
						? ( hash[1] & hash[2] | hash[1] & hash[3] | hash[2] & hash[3] ) - 1894007588
					
					: ( hash[1] ^ hash[2] ^ hash[3] ) - 899497514

				const next = n1 + hash[4] + ( buffer[j] >>> 0 ) + n2

				hash[4] = hash[3]
				hash[3] = hash[2]
				hash[2] = (hash[1] << 30) | (hash[1] >>> 2)
				hash[1] = hash[0]
				hash[0] = next
				
			}

			hash[0] += h0
			hash[1] += h1
			hash[2] += h2
			hash[3] += h3
			hash[4] += h4
			
		}
		
		// BE -> LE
		for( let i = 0; i < hash.length; ++i ) {
			const word = hash[i]
			hash[i] = 0
				| word << 24
				| word << 8 & 0xFF0000
				| word >>> 8 & 0xFF00
				| word >>> 24 & 0xFF
		}

		return new Uint8Array( hash.buffer )
	}
	
}
