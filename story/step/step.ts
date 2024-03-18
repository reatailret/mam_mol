
	
	/**
	 * Change of one field of one object. 12B+
	 */
	export abstract class $mol_story_step {

		constructor(
			public object: object, // 4B
			public field: string, // 4B
			public value: unknown, // 4B+
		){ }

		abstract go(): void

	}

	/**
	 * Property based step.
	 * `this.foo()` - getter
	 * `this.foo( 123 )` - setter-getter
	 */
	 class $mol_story_step_prop extends $mol_story_step {

		@ $mol_story_skip.method
		go() {
			this.object[ this.field ]( this.value )
		}

	}

	/**
	 * Property based step.
	 * `this.foo` - getter
	 * `this.foo = 123` - setter
	 */
	 class $mol_story_step_field extends $mol_story_step {

		@ $mol_story_skip.method
		go() {
			this.object[ this.field ] = this.value
		}

	}



 export {$mol_story_step_prop,$mol_story_step_field}