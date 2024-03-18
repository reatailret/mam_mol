
	
	// 00 HHHHH HHHHH HHHHH LLLLL LLLLL LLLLL
	
	const mask = 0b11111_11111_11111
	
	function $mol_coord_pack( high: number, low: number ) {
		return ( high << 17 >>> 2 ) | ( low & mask )
	}

	function $mol_coord_high( pack: number ) {
		return pack << 2 >> 17
	}

	function $mol_coord_low( pack: number ) {
		return ( pack << 17 ) >> 17
	}
	


 export {$mol_coord_pack,$mol_coord_high,$mol_coord_low}