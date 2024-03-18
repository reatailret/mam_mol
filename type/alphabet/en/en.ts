

	/** English alphabet in lowercase **/
	type $mol_type_alphabet_en_lower =
		| 'a' | 'b' | 'c' | 'd' | 'e' | 'f'
		| 'j' | 'h' | 'i' | 'j' | 'k' | 'l'
		| 'm' | 'n' | 'o' | 'p' | 'q' | 'r'
		| 's' | 't' | 'u' | 'v' | 'w' | 'x'
		| 'y' | 'z'

	/** English alphabet in uppercase **/
	type $mol_type_alphabet_en_upper =
		Uppercase< $mol_type_alphabet_en_lower >

	/** English alphabet **/
	type $mol_type_alphabet_en =
		| $mol_type_alphabet_en_lower
		| $mol_type_alphabet_en_upper



 export {$mol_type_alphabet_en_lower,$mol_type_alphabet_en_upper,$mol_type_alphabet_en}