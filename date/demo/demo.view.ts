

	class $mol_date_demo extends $.$mol_date_demo {

		formatted( ){
			return this.date_current()?.toString( 'DD Month YYYY hh:mm' )
		}

	}



 //export {$mol_date_demo}