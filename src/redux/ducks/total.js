import { TOTAL,DEL_TOTAL } from "../types";


export const sumTotal  = (total) => ({
    type: TOTAL,
    total
});
export const delTotal  = () => ({
    type: DEL_TOTAL,
});



const initialState = {
    total: 0
}

const av = (state = initialState, action) => {
    switch (action.type) {
        case TOTAL:
            const {total} = action
            return {...state, total: state.total + total};
        case DEL_TOTAL:
            return { total: 0};
        default: 
            return state;
    }
}
export default av