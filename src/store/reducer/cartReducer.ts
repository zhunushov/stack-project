import { CartState, CartAction, CartActionTypes } from './../../types/cart';


const INIT_STATE: CartState = {
    cart: {},
    error: null,
    cartLength: 0,
}

export const cartReducer = (state = INIT_STATE, action: CartAction): CartState => {
    switch(action.type){
         case CartActionTypes.GET_CARTS_SUCCESS:
             return {...state, cart: action.payload}
        case CartActionTypes.GET_CARTS_ERROR: 
            return {...state, error: action.payload}
        case CartActionTypes.GET_CARTS_LENGTH:
             return {...state, cartLength: action.payload}
        default: return state
    }
}