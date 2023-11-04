import { ADD_TO_CART, REMOVE_FROM_CART } from './actionType';

export const add_to_cart = (item) => {
    return {
        type: ADD_TO_CART,
        value: item
    }
}

export const remove_from_cart = (itemId) => {
    return {
        type: REMOVE_FROM_CART,
        value: itemId
    }
}
