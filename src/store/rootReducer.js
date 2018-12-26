import { SET_MODELE_KAPP } from "./types"

const initState = {
  modeleKapp: {}
}

const rootReducer = (state = initState, action) => {
  //
  switch (action.type) {
    //
    case SET_MODELE_KAPP: {
      state.modeleKapp = {}

      return {
        ...state,
        modeleKapp: { ...action.payload }
      }
    }
    //
    default:
      return state
  }
}

export default rootReducer
