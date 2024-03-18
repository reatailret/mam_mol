

	/**
	 * Uppercase type keys.
	 *
	 * 	// { FOO: 'bar' }
	 * 	$mol_type_case_upper_keys< { foo: 'bar' } >
	 */
	type $mol_type_case_upper_keys< Type > =
		{
			[
				Key in keyof Type
				as Uppercase< Extract< Key, string > >
			]:
				Type[ Key ]
		}

	/**
	 * Uppercase type values.
	 *
	 * 	// { foo: 'BAR' }
	 * 	$mol_type_case_upper_values< { foo: 'bar' } >
	 */
	type $mol_type_case_upper_values< Type > =
		{
			[ Key in keyof Type ]:
				Uppercase< Extract< Type[ Key ], string > >
		}



 export {$mol_type_case_upper_keys,$mol_type_case_upper_values}