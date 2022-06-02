import { CartAction, CartActionTypes } from '../../types/cart';
import { Dispatch } from "redux"
import { ICart } from '../../types/ICart';

export function calcSubPrice (values: any) {
    return values.count * values.item.price
}

export function calcTotalPrice(values: ICart[]){
    let totalPrice = 0;
    values.forEach((elem: any) => {
        totalPrice += elem.subPrice
    })
    return totalPrice
}

export const addCartProduct = (newCart : any) => {
    return (dispath: Dispatch<CartAction>) => {
    try {
        let cart = JSON.parse(`${localStorage.getItem("cart")}`)
        if(!cart){
            cart = {
              products: [],
              totalPrice: 0
            }
        }
        let newCartproduct = {
            item: newCart,
            count: 1,
            subPrice: 0
        }
        let filteredProduct = cart.products.filter((elem: any) => elem.item.id === newCart.id)

        if(filteredProduct.length > 0){
            cart.products = cart.products.filter((elem: any) => elem.item.id !== newCart.id)
        }else{
            console.log(newCartproduct)
            cart.products.push(newCartproduct)
        }
        
        newCartproduct.subPrice = calcSubPrice(newCartproduct)
        
        cart.totalPrice = calcTotalPrice(cart.products)

        localStorage.setItem("cart", JSON.stringify(cart))
        dispath({type: CartActionTypes.GET_CARTS_LENGTH, payload: cart.products.length})
        dispath({type: CartActionTypes.GET_CARTS_SUCCESS, payload: cart})
    } catch (error) {
        console.log(error)
        dispath({type: CartActionTypes.GET_CARTS_ERROR, payload: "ошибка при добовление корзины", error})
    }
}}

export const getCartProduct = () => {
    return (dispatch: Dispatch<CartAction>) => {
        try {
            let cart = JSON.parse(`${localStorage.getItem("cart")}`)
            if(!cart){
                cart = {
                    products: [],
                    totalPrice: 0
                }
            }
            dispatch({type: CartActionTypes.GET_CARTS_SUCCESS, payload: cart})
        } catch (error) {
           console.log(error)
           dispatch({ type: CartActionTypes.GET_CARTS_ERROR, payload: "ощибка при запросе корзины" + error}) 
        }
    }
}
export const getCartLength = () => {
    return (dispatch: Dispatch<CartAction>) => {
        try {
            let cart = JSON.parse(`${localStorage.getItem("cart")}`)
            if(!cart){
                cart = {
                    products: [],
                    totalPrice: 0
                }
            }
            dispatch ({type: CartActionTypes.GET_CARTS_LENGTH, payload: cart.products.length})
        } catch (error) {
            console.log(error)
            dispatch({type: CartActionTypes.GET_CARTS_ERROR, payload: "оштбка при зопросе getCartLength " + error})
        }
    }
}
export const changeCountProduct = (count: number, id: string|number) => {
    console.log(count, id)
    return (dispatch: Dispatch<CartAction>) => {
        try {
            let cart = JSON.parse(`${localStorage.getItem("cart")}`)
            cart.products = cart.products.map((elem: any) => {
                if(elem.item.id === id){
                    elem.count = count
                    elem.subPrice = calcSubPrice(elem)
                }
                return elem
            })
            cart.totalPrice = calcTotalPrice(cart.products)
            localStorage.setItem("cart", JSON.stringify(cart))
            dispatch({type: CartActionTypes.GET_CARTS_SUCCESS, payload: cart})
        } catch (error) {
            console.log(error)
            dispatch({type: CartActionTypes.GET_CARTS_ERROR, payload: "ощибка при changeCountProduct" + error})
        }
    }
}
export const checkProductCart = (id: number) => {
    return (dispatch: Dispatch<CartAction>) => {
        try {
            let cart = JSON.parse(`${localStorage.getItem("cart")}`)
            if(!cart){
                cart = {
                    products: [],
                    totalPrice: 0
                }
            }
            const checkCart = cart.products.find((elem: any) => elem.item.id === id)
            return checkCart ? true : false
        } catch (error) {
            console.log(error)
            dispatch({type: CartActionTypes.GET_CARTS_ERROR, payload: "ощибка при checkProductCart" + error})
        }
    }
}

export const deleteProductCart = (id: number, price: number) => {
    return (dispatch: Dispatch<CartAction>) => {
        try {
        let cart = JSON.parse(`${localStorage.getItem("cart")}`)
            if(!cart) {
                cart = {
                    products: [],
                    totalPrice: 0
                }
            }
            cart.products.forEach((elem: any, index: number) => {
                if(elem.item.id === id){
                   cart.products.splice(index, 1)
                }if(elem.item.price === price){
                    cart.totalPrice = cart.totalPrice - price
                }
            })
            localStorage.setItem("cart", JSON.stringify(cart))
            dispatch({type: CartActionTypes.GET_CARTS_SUCCESS, payload: cart})
        } catch (error) {
            console.log(error)
            dispatch({type: CartActionTypes.GET_CARTS_ERROR, payload:"ощибка при удаление из корзины" + error})
        }
    }
}