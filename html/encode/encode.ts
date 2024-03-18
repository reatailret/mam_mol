
	
	const mapping = {
		'<' : '&lt;' ,
		'>' : '&gt;' ,
		'"' : '&quot;' ,
		'&' : '&amp;' ,
	}
	
	function $mol_html_encode( text : string ) {
		return text.replace( /[&<">]/gi , str => mapping[ str as keyof typeof mapping ] )
	}
	


 export {$mol_html_encode}