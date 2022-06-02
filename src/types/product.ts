import { IProduct } from './IProduct';
export interface ProductState  {
    loading: boolean,
    error: string | null,
    products: IProduct[]
    edit: {}
}

export enum ProductActionTypes {
    GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS',
    GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR',
    GET_PRODUCT_UBDATE = 'GET_PRODUCT_UBDATE',
    GET_PRODUCT_LOADING = 'GET_PRODUCT_LOADING'
}

interface ProductActionSuccess {
    type: ProductActionTypes.GET_PRODUCT_SUCCESS;
    payload: IProduct[]
}
interface ProductActionUbdate {
    type: ProductActionTypes.GET_PRODUCT_UBDATE;
    payload: any
}

interface ProductActionLoading {
    type: ProductActionTypes.GET_PRODUCT_LOADING;
    payload: boolean
}
interface ProductActionError {
    type: ProductActionTypes.GET_PRODUCT_ERROR;
    payload: string
}

export type ProductAction = ProductActionSuccess | ProductActionLoading | ProductActionError | ProductActionUbdate