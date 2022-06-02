import { RewiewsState, RewiewsAction, RewiewsActionTypes } from './../../types/rewiews';

const INIT_STATE: RewiewsState = {
    rewiews: [],
    error: null
}

export const rewiewsReducer = (state = INIT_STATE, action: RewiewsAction): RewiewsState => {
    switch(action.type){
        case RewiewsActionTypes.GET_REWIEWS_SUCCESS:
            return {...state, rewiews: action.payload}
        case RewiewsActionTypes.GET_REWIEWS_ERROR:
            return {...state, error: action.payload}
        default: return state
    }
}