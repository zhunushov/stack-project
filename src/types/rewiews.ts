export interface RewiewsState {
    error: string| null,
    rewiews: any[]
}

export enum RewiewsActionTypes {
    GET_REWIEWS_SUCCESS = 'GET_REWIEWS_SUCCESS',
    GET_REWIEWS_ERROR = 'GET_REWIEWS_ERROR',
}

interface RewiewsActionSuccess {
    type: RewiewsActionTypes.GET_REWIEWS_SUCCESS;
    payload: any[]
}

interface RewiewsActionError {
    type: RewiewsActionTypes.GET_REWIEWS_ERROR;
    payload: string
}

export type RewiewsAction = RewiewsActionError | RewiewsActionSuccess