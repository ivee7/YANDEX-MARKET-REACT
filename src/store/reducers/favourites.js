import {FAV_ADD_PROD, FAV_DEL_PROD, FAV_TOGGLE} from '../actions/actionTypes'

const initialState = {
    fav: []
}

export default function favReducer(state = initialState, action) {
    switch (action.type) {
        case FAV_TOGGLE:
            const favProdIndex = state.fav.findIndex(
                prod => prod.id === action.item.id
            )

            if (favProdIndex >= 0) {
                return {
                    ...state,
                    fav: [...state.fav.filter(prod => prod.id !== action.item.id)]
                }
            } else {
                return {
                    ...state,
                    fav: [...state.fav, action.item]
                }
            }
        default:
            return state
    }
}