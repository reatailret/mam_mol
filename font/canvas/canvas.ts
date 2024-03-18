

	let canvas : CanvasRenderingContext2D

	function $mol_font_canvas( next = canvas ) {
		if( !next ) next = $mol_dom_context.document.createElement( 'canvas' ).getContext( '2d' )!
		return canvas = next
	}



 export {$mol_font_canvas}