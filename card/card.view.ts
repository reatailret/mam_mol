

	/**
	 * Represents a common card. It can has several statuses at bottom line.
	 * @see https://mol.hyoo.ru/#!section=demos/demo=mol_card_demo/readme
	 */
	class $mol_card extends $.$mol_card {

		rows(): readonly $mol_view[] {
			return [
				this.Content() ,
				... this.status_text() ? [ this.Status() ] : [],
			]
		}

	}



 //export {$mol_card}