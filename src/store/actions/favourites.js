import {FAV_ADD_PROD, FAV_DEL_PROD} from './actionTypes'


export function addFavProd(item) {
    return {
        type: FAV_ADD_PROD,
        item
    }
}

export function delFavProd(id) {
    return {
        type: FAV_DEL_PROD,
        id
    }
}