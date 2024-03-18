

	const $mol_ambient_ref : unique symbol = Symbol( '$mol_ambient_ref' )

	/** @deprecated use $ instead */
	type $mol_ambient_context = $

	function $mol_ambient( this : $ | void , overrides : Partial< $ > ) : $ {
		return Object.setPrototypeOf( overrides , this || $ )
	}



 export {$mol_ambient_ref,$mol_ambient_context,$mol_ambient}