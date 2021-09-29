import { DECREMENT, INCREMENT } from "../types";


export const increment  = () => ({
    type: INCREMENT
});
export const decrement  = () => ({
    type: DECREMENT
});


const initialState = {
    count: 0
}

const ac = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1};
        case DECREMENT:
            return {count: 0};
        default: 
            return state;
    }
}
export default ac