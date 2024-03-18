

	/**
	 * Picks keys from `Input` which values extends `Upper`.
	 * 
	 * 	type MathConstants = $mol_type_pick< Math , number > // { E , PI , ... }
	 */
	type $mol_type_pick< Input , Upper > =
		Pick<
			Input ,
			$mol_type_keys_extract< Input , Upper >
		>



 export {type $mol_type_pick}
