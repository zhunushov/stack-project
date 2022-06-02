import { IProduct } from './../../types/IProduct';
import { FovaritesAction, FovaritesActionTypes } from '../../types/fovarites';
import { Dispatch } from 'redux';



export const addFovarites = (newFov: IProduct) => {
    console.log(newFov)
    return async (dispatch: Dispatch<FovaritesAction>) => {
        try {
            let fovarites = JSON.parse(`${localStorage.getItem("fovarites")}`)
            console.log(fovarites)
            if(!fovarites){
                fovarites = {
                    products: []
                }
            }
            
            let filterdFovarites = fovarites.products.filter((elem: IProduct) => elem.id === newFov.id)
            
            if(filterdFovarites.length > 0){
                console.log('after')
                fovarites.products = fovarites.products.filter((elem: IProduct) => elem.id !== newFov.id)
            }else{
                fovarites.products.push(newFov)
            }
            localStorage.setItem("fovarites", JSON.stringify(fovarites))
            dispatch({type: FovaritesActionTypes.GET_FOVARITES_SUCCESS, payload: fovarites})
        } catch (error) {
            console.log(error)
            dispatch({type: FovaritesActionTypes.GET_FOVARITES_ERROR, payload: "error of Add FOvarites" + error})
        }
    }
}

export const getFovarites = () => {
    return (dispatch: Dispatch<FovaritesAction>) => {
        try {
            let fovarites = JSON.parse(`${localStorage.getItem("fovarites")}`)
            console.log(fovarites)
            if(!fovarites) {
                fovarites = {
                    products: []
                }
            }

            dispatch({type: FovaritesActionTypes.GET_FOVARITES_SUCCESS, payload: fovarites})
        } catch (error) {
          console.log(error)
          dispatch({type: FovaritesActionTypes.GET_FOVARITES_ERROR, payload: "error of GetFOvarites" + error})
        }
    }
}

export const deleteFovarites = (id: string) => {
    return (dispatch: Dispatch<FovaritesAction>) => {
        try {
            let fovarites = JSON.parse(`${localStorage.getItem("fovarites")}`)
            
            fovarites.products.forEach((elem: IProduct, index: number) => {
                if(elem.id === id) {
                 fovarites.products.splice(index, 1)
                }
            })
             localStorage.setItem("fovarites", JSON.stringify(fovarites))
            dispatch({type: FovaritesActionTypes.GET_FOVARITES_SUCCESS, payload: fovarites})
        } catch (error) {
           console.log(error)
           dispatch({ type: FovaritesActionTypes.GET_FOVARITES_ERROR, payload: "error of DeleteFovarotes" + error})
        }
    }
}
export const checkFovarites = (id: string) => {
    return (dispatch: Dispatch<FovaritesAction>) => {
        try {
            let fovarites = JSON.parse(`${localStorage.getItem("fovarites")}`) 
             if(!fovarites) {
                 fovarites = {
                     products: []
                 }
             }
             const checkFov = fovarites.products.find((elem: any) => elem.id === id)
             return checkFov ? true : false
        } catch (error) {
           console.log(error)
           dispatch({type: FovaritesActionTypes.GET_FOVARITES_ERROR, payload: "error of CheckFovarites" + error}) 
        }
    }
} 