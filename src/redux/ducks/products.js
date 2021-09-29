import { GET_PRODUCTS, SET_PRODUCTS,DEL_PRODUCTS } from "../types";

export const getProduct  = (product) => ({
    type: GET_PRODUCTS,
    product
});
export const setProduct  = (products) => ({
    type: SET_PRODUCTS,
    products
});
export const deleteProduct  = () => ({
    type: DEL_PRODUCTS,
});


const initialState = []

function ab(state = initialState, action){
    switch (action.type) {
        case GET_PRODUCTS:
            const {product} = action
            return [...state, product];
        case SET_PRODUCTS:
            const {products} = action
            return [...state, products];
        case DEL_PRODUCTS:
            return [];
        default: 
            return state;
    }
}
export default ab;