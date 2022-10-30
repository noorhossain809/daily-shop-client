
import { CartAction } from 'redux/actions/cartAction';
import { ActionTypes } from '../actionTypes';

export const addToCart = (payload : IProduct) : CartAction => {
    return {
        type : ActionTypes.ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (payload : string) : CartAction => {
    return {
        type : ActionTypes.REMOVE_FROM_CART,
        payload
    }
}

export const clearCart = () : CartAction => {
    return {
        type : ActionTypes.CLEAR_CART,
    }
}

