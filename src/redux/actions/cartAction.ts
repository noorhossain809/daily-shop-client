import { ActionTypes } from "redux/actionTypes"

interface addToCartAction  {
    type : ActionTypes.ADD_TO_CART,
    payload: IProduct
}

interface removeFromCartAction  {
    type : ActionTypes.REMOVE_FROM_CART,
    payload: string
}

interface ClearToCartAction  {
    type : ActionTypes.CLEAR_CART,
    
}

export type CartAction =
    addToCartAction
    | removeFromCartAction 
    | ClearToCartAction 