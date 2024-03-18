
	function $mol_guard_defined<T>(value: T): value is NonNullable<T> {
		return value !== null && value !== undefined
	}


 export {$mol_guard_defined}