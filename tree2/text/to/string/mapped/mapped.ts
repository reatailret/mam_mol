

	function $mol_tree2_text_to_string_mapped( this: $, text: $mol_tree2, type: 'js' | 'css' ) {
		
		const code = this.$mol_tree2_text_to_string( text )
		const map = this.$mol_tree2_text_to_sourcemap( text )

		const chunk = this.$mol_sourcemap_dataurl_encode( map, type )
		return code + chunk
	}

	function $mol_tree2_text_to_string_mapped_js( this: $, text: $mol_tree2 ) {
		return this.$mol_tree2_text_to_string_mapped( text, 'js' )
	}
	
	function $mol_tree2_text_to_string_mapped_css( this: $, text: $mol_tree2 ) {
		return this.$mol_tree2_text_to_string_mapped( text, 'css')
	}
	


 export {$mol_tree2_text_to_string_mapped,$mol_tree2_text_to_string_mapped_js,$mol_tree2_text_to_string_mapped_css}