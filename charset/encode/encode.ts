
	const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder

	const encoder = new TextEncoder()

	function $mol_charset_encode(value: string) {
		return encoder.encode(value)
	}



 export {$mol_charset_encode}