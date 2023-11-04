import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/actionType";

const initialState = [];

const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            if(state.find((item) => item.id === action.value.id)){
                return state;
            }
            
            return [...state, action.value];
        case REMOVE_FROM_CART:
            return state.filter((item) => item.id !== action.value);

        default:
            return state;
    }
}

export default cartReducer;

