
	const regular_regex = /^\w+$/

	function $mol_view_tree2_prop_quote(name: $mol_tree2) {
		if (regular_regex.test(name.value)) return name

		return name.data(JSON.stringify(name.value))
	}


 export {$mol_view_tree2_prop_quote}