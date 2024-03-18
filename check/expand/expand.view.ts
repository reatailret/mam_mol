
	
	/**
	 * Expander for trees, lists, etc
	 * @see https://mol.hyoo.ru/#!section=demos/demo=mol_check_expand_demo
	 */
	class $mol_check_expand extends $.$mol_check_expand {
		
		level_style() {
			return `${ this.level() * 1 - 1 }rem`
		}
		
		expandable() {
			return this.expanded() !== null
		}
		
	}
	


 //export {$mol_check_expand}