

	type $mol_blob = Blob

	let $mol_blob = ( $node.buffer?.Blob ?? $mol_dom_context.Blob ) as any as {
		prototype: Blob;
		new(blobParts?: readonly BlobPart[], options?: BlobPropertyBag): Blob;
	}



 export {$mol_blob}
