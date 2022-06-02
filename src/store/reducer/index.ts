import { cartReducer } from './cartReducer';
import { combineReducers } from "redux";
import { producteReduser } from './productReducer';
import { rewiewsReducer } from './rewiewsReducer';
import { fovaritesReducer } from './fovaritesReducer';


export const rootReducer = combineReducers({
    cart:cartReducer,
    product: producteReduser,
    rewiews: rewiewsReducer,
    fovarites: fovaritesReducer
})

export type RootState = ReturnType <typeof rootReducer>