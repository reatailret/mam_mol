

	/**
	 * Recursive `-Readonly`.
	 * 
	 * 	let props : $mol_type_mutable< { readonly foo: number[] } > = { foo: number[] }
	 */
	type $mol_type_mutable_deep< Val > = {
		-readonly [ field in keyof Val ]: $mol_type_mutable_deep< Val[ field ] >
	}



 export {$mol_type_mutable_deep}