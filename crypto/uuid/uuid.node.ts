
	function $mol_crypto_uuid_node(this: $) {
		return this.$node.crypto.randomUUID()
	}

	$.$mol_crypto_uuid = $mol_crypto_uuid_node


 export {$mol_crypto_uuid_node}