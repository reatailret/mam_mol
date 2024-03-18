
	
	type $mol_type_erase<
		Class extends { new(): any },
		Keys extends keyof InstanceType< Class >
	> = Omit< Class, 'prototype' > & {
		new(): Omit< InstanceType< Class >, Keys >
	}
	


 export {$mol_type_erase}