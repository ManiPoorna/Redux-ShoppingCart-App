import { ADD_TO_CART,REMOVE_FROM_CART } from "../actions/actionTypes.js";

const initalState = [];

const cartReducer = (state = initalState, action) => {

    if (action.type === ADD_TO_CART) {
        for (let i = 0; i < state.length; i++) {
            if (state[i].id === action.payload.id) {
                alert("Item already added to cart.")
                return state;
            }
        }
        alert("Item Added successfully")
        return [...state, action.payload]
    }
    else if (action.type === REMOVE_FROM_CART) {
        const c = () => {
            return confirm("want to remove ite from cart")
        }
        if (c()) {
            const updatedCart = state.filter((item) => {
                return item.id !== action.payload
            })
            return updatedCart
        }
        else {
            return state
        }
    }
    else {
        return state;
    }
}

export default cartReducer;