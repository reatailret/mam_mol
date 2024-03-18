var cordova : any

	
	var $mol_cordova = cordova || {
		plugins : {
			barcodeScanner : null
		}
	}
	
	function $mol_cordova_camera() {
		return ( navigator as any )[ 'camera' ]
	}
	


 export {$mol_cordova,$mol_cordova_camera}