import { SEARCH } from "../types";

export const search  = (search) => ({
    type: SEARCH,
    search
});


const initialState = {
    search: ''
}

const ad = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            const {search} = action
            return {...state, search: search };
        default: 
            return state;
    }
}
export default ad