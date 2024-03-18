

	/** Checks them member is override of same member of superclass. */
	function $mol_override< Sup >( sup : new()=> Sup ) {

		return <
			Field extends keyof Sup ,
			Proto extends { [ key in Field ] : Sup[ Field ] } ,
		>(
			proto : Proto ,
			field : Field ,
			descr : TypedPropertyDescriptor< Sup[ Field ] > ,
		)=> {}

	}
	


 export {$mol_override}