

	/**
	 * Omit keys from `Input` which values extends `Upper`.
	 * 
	 * 	type MathConstants = $mol_type_omit< Math , Function > // { E , PI , ... }
	 */
	type $mol_type_omit< Input , Upper > =
		Pick<
			Input ,
			$mol_type_keys_exclude< Input , Upper >
		>



 export {$mol_type_omit}