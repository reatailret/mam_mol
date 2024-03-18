

	class $mol_calendar_demo_holiday extends $.$mol_calendar_demo_holiday {

		holiday( day : string ) {
			return this.holidays().indexOf( day ) >= 0
		}

	}



 //export {$mol_calendar_demo_holiday}