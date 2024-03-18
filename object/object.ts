

	

	const $mol_object_field = Symbol( '$mol_object_field' )
	
	class $mol_object extends $mol_object2 {
		
		public static make< This extends typeof $mol_object >(
			this: This,
			config: Partial< InstanceType< This > >,
		) {
			return super.create( obj => {
				for( let key in config ) ( obj as any )[ key ] = config[ key ]!
			} ) as InstanceType< This >
		}
		
	}



 export {$mol_object_field,$mol_object}