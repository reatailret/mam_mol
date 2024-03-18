

	/** Russian alphabet in lowercase **/
	type $mol_type_alphabet_ru_lower =
		| 'а' | 'б' | 'в' | 'г' | 'д' | 'е'
		| 'ё' | 'ж' | 'з' | 'и' | 'й' | 'к'
		| 'л' | 'м' | 'н' | 'о' | 'п' | 'р'
		| 'с' | 'т' | 'у' | 'ф' | 'х' | 'ц'
		| 'ч' | 'ш' | 'щ' | 'ъ' | 'ы' | 'ь'
		| 'э' | 'ю' | 'я'

	/** Russian alphabet in uppercase **/
	type $mol_type_alphabet_ru_upper =
		Uppercase< $mol_type_alphabet_ru_lower >

	/** Russian alphabet **/
	type $mol_type_alphabet_ru =
		| $mol_type_alphabet_ru_lower
		| $mol_type_alphabet_ru_upper



 export {$mol_type_alphabet_ru_lower,$mol_type_alphabet_ru_upper,$mol_type_alphabet_ru}