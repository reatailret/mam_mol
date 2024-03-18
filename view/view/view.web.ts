interface Window {
	cordova : any
}


	$mol_dom_context.document?.addEventListener(
		'DOMContentLoaded',
		()=> $mol_view.autobind(),
		{ once: true },
	)

 export {}