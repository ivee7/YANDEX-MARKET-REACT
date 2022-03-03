import {
    CART_ADD_PROD,
    CART_DEL_PROD,
    CART_DEL_CHECKED, 
    CART_DEl_PROD_TOTALLY,
    CART_TOGGLE_CHECKED,
    CART_TOGGLE_ALL
    } from './actionTypes'

export function addToCart(item) {
    return {
        type: CART_ADD_PROD,
        item
    }
}

export function toggleCheckSingle(id) {
    return {
        type: CART_TOGGLE_CHECKED,
        id
    }
}

export function toggleCheckAll() {
    return {
        type: CART_TOGGLE_ALL
    }
}

export function delFromCart(id) {
    return {
        type: CART_DEL_PROD,
        id
    }
}

export function delAllChecked() {
    return {
        type: CART_DEL_CHECKED
    }
}

export function delProdTotally(id) {
    return {
        type: CART_DEl_PROD_TOTALLY,
        id
    }
}