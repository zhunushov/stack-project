import { FovaritesState, FovaritesAction, FovaritesActionTypes } from './../../types/fovarites';


const INIT_STATE: FovaritesState = {
     error: null,
     fovarites: []
}

export const fovaritesReducer = (state = INIT_STATE, action: FovaritesAction): FovaritesState => {
    switch(action.type) {
        case FovaritesActionTypes.GET_FOVARITES_SUCCESS:
            return {...state, fovarites: action.payload}
        case FovaritesActionTypes.GET_FOVARITES_ERROR:
            return {...state, error: action.payload}
        default: return state
    }
}