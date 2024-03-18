

	/** Any unary function **/
	type $mol_type_unary_func = ( ( param : any ) => any )
	type $mol_type_unary_class = new( param : any ) => any
	type $mol_type_unary = $mol_type_unary_func | $mol_type_unary_class



 export {$mol_type_unary_func,$mol_type_unary_class,$mol_type_unary}