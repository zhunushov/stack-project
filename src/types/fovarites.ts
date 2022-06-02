import { IFovarites } from './IFovarites';

export interface FovaritesState {
    fovarites: any,
    error: null | string ;
}
export enum FovaritesActionTypes {
    GET_FOVARITES_SUCCESS = "GET_FOVARITES_SUCCESS",
    GET_FOVARITES_ERROR = "GET_FOVARITES_ERROR",
}

interface FovaritesActionSuccess {
    type: FovaritesActionTypes.GET_FOVARITES_SUCCESS;
    payload: IFovarites[]
}
interface FovaritesActionError {
    type: FovaritesActionTypes.GET_FOVARITES_ERROR;
    payload: string
}
export type FovaritesAction = FovaritesActionSuccess | FovaritesActionError