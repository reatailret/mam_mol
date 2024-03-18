

	/**
	 * @see https://mol.hyoo.ru/#!section=demos/demo=mol_audio_demo
	 */
	class $mol_audio_room extends $mol_audio_node {
		
		@ $mol_action
		play() {
			this.output()
			this.$.$mol_wait_timeout( this.duration() * 1000 )
		}
		
	}


 export {$mol_audio_room}