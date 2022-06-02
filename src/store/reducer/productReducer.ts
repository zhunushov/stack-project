import { ProductState, ProductAction ,ProductActionTypes} from './../../types/product';

const INIT_STATE: ProductState = {
    products: [],
    edit: {},
    error: null,
    loading: false
}

export const producteReduser = (state = INIT_STATE, action: ProductAction): ProductState => {
    switch(action.type) {
        case ProductActionTypes.GET_PRODUCT_SUCCESS:
            return {...state, products: action.payload}
        case ProductActionTypes.GET_PRODUCT_ERROR: 
            return {...state, error: action.payload}
        case ProductActionTypes.GET_PRODUCT_LOADING:
            return {...state, loading: action.payload}
        case ProductActionTypes.GET_PRODUCT_UBDATE:
            return {...state, edit: action.payload}
        default: return state
    }
}