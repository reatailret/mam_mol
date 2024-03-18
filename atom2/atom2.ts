
	
	/** @deprecated Use `$mol_wire_probe` */
	let $mol_atom2_value = $mol_wire_probe
	
	/** @deprecated Use `$mol_wire_field` */
	let $mol_atom2_field = $mol_wire_field
	
	/** @deprecated Doesn't reqired anymore */
	function $mol_atom2_autorun( calculate : ()=> any ) {
		return new $mol_after_frame( calculate )
	}
	


 export {$mol_atom2_value,$mol_atom2_field,$mol_atom2_autorun}