
export interface CartState {
    cart: any,
    error?: null | string,
    cartLength?: number;
}

export enum CartActionTypes {
    GET_CARTS_SUCCESS = "GET_CARTS_SUCCESS",
    GET_CARTS_ERROR = "GET_CARTS_ERROR",
    GET_CARTS_LENGTH = "GET_CARTS_LENGTH"
}

interface CartActionSucces {
    type: CartActionTypes.GET_CARTS_SUCCESS;
    payload: CartState;
}
interface CartActionError {
    type: CartActionTypes.GET_CARTS_ERROR;
    payload: string;
}
interface CartActionLength {
   type: CartActionTypes.GET_CARTS_LENGTH;
   payload: number
}
export type CartAction = CartActionError | CartActionSucces | CartActionLength