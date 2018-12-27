import { SET_MODELE_KAPP, SET_NEW_REGLAGE } from './types'

export const setModeleKapp = modele_kapp => {
	return {
		type: SET_MODELE_KAPP,
		payload: modele_kapp
	}
}

export const setNewReglage = reglage => {
	return {
		type: SET_NEW_REGLAGE,
		payload: reglage
	}
}
