import {FAV_TOGGLE} from './actionTypes'

export function toggleFav(item) {
    return {
        type: FAV_TOGGLE,
        item
    }
}