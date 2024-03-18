

	type $mol_sourcemap_segment = [number] | [number, number, number, number] | [number, number, number, number, number]
	type $mol_sourcemap_line = $mol_sourcemap_segment[]
	type $mol_sourcemap_mappings = $mol_sourcemap_line[]

	export interface $mol_sourcemap_raw {
		version: number
		sources: string[]
		names?: string[]
		sourceRoot?: string
		sourcesContent?: (string | null)[]
		mappings: string | $mol_sourcemap_line[]
		file?: string
	}



 export {$mol_sourcemap_segment,$mol_sourcemap_line,$mol_sourcemap_mappings}