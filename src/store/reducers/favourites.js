import {FAV_ADD_PROD, FAV_DEL_PROD} from '../actions/actionTypes'

const initialState = {
    fav: []
}

export default function favReducer(state = initialState, action) {
    switch (action.type) {
        case FAV_ADD_PROD:
            return {
                ...state,
                fav: [...state.fav, action.item]
            }
        case FAV_DEL_PROD:
            return {
                ...state,
                fav: [...state.fav.filter(prod => prod.id !== action.id)]
            }
        default:
            return state
    }
}