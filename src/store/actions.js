import { SET_MODELE_KAPP } from "./types"

export const setModeleKapp = (modele_kapp) => {
  return {
    type: SET_MODELE_KAPP,
    payload: modele_kapp
  }
}
