

	/**
	 * Atomic step for navigation through story. 48B+
	 */
	class $mol_story_twist {

		constructor(
			public prev: $mol_story_step[], // 24B+
			public next: $mol_story_step[], // 24B+
		){ }

		forward() {
			for( const step of this.next ) step.go()
		}

		backward() {
			for( const step of this.prev ) step.go()
		}

	}



 export {$mol_story_twist}