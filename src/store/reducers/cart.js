import {CART_ADD_PROD,
         CART_DEL_PROD, 
         CART_DEL_CHECKED, 
         CART_DEl_PROD_TOTALLY,
         CART_TOGGLE_CHECKED,
         CART_TOGGLE_ALL
        } from '../actions/actionTypes'

const initialState = {
    cart: [],
    currency: '₽',
    sum: 0,
    quantity: 0,
    weight: 0
}

const rooundNumber = (num) => {
    return Math.floor(num * 100) / 100
}

const getTotalCheque = (arr) => {
        const checkedItems = arr.filter(prod => prod.isChecked);
        const finalSum = checkedItems.reduce((sum, prod) => sum + prod.cartQuantity * +prod.price, 0);
        const finalQuantity = checkedItems.reduce((sum, prod) => sum + prod.cartQuantity, 0);
        const finalWeight = rooundNumber(checkedItems.reduce((sum, prod) => sum + prod.cartQuantity * prod.weight, 0));
        return {
            sum: finalSum,
            quantity: finalQuantity,
            weight: finalWeight
        }
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case CART_ADD_PROD:
            const itemToPlusIndex = state.cart.findIndex(
                prod => prod.id === action.item.id
            );

            if (itemToPlusIndex >= 0) {
                const cartPlusQuantity = [...state.cart]
                cartPlusQuantity[itemToPlusIndex].cartQuantity += 1
                return {
                    ...state,
                    cart: [...cartPlusQuantity],
                    ...getTotalCheque(cartPlusQuantity)
                }
            } else {
                const tempProd = {...action.item, isChecked: true, cartQuantity: 1};

                return {
                    ...state,
                    cart: [...state.cart, tempProd],
                    ...getTotalCheque([...state.cart, tempProd])
                }
            }
        case CART_TOGGLE_CHECKED:
            const toggleCheckedItemIndex = state.cart.findIndex(
                prod => prod.id === action.id
            )
            const cartToggleChecked = [...state.cart]
            cartToggleChecked[toggleCheckedItemIndex].isChecked = !state.cart[toggleCheckedItemIndex].isChecked
            return {
                ...state,
                cart: [...cartToggleChecked],
                ...getTotalCheque(cartToggleChecked)
            }
        case CART_TOGGLE_ALL:
            const cartToggleAll = [...state.cart]
            if (state.cart.every(prod => prod.isChecked)) {
                cartToggleAll.map(prod => prod.isChecked = false)
            } else {
                cartToggleAll.map(prod => prod.isChecked = true )
            }
            return {
                ...state,
                cart: [...cartToggleAll],
                ...getTotalCheque(cartToggleAll)
            }
        case CART_DEL_PROD:
            const itemToDelIndex = state.cart.findIndex(
                prod => prod.id === action.id
            );

            if (state.cart[itemToDelIndex].cartQuantity > 1) {
                const cartMinusQuantity = [...state.cart]
                cartMinusQuantity[itemToDelIndex].cartQuantity -= 1
                return {
                    ...state,
                    cart: [...cartMinusQuantity],
                    ...getTotalCheque(cartMinusQuantity)
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart.filter(prod => prod.id !== action.id)],
                    ...getTotalCheque([...state.cart.filter(prod => prod.id !== action.id)])
                }
            }
        case CART_DEL_CHECKED:
            const uncheckedCart = [...state.cart]
            const uncheckedResults = uncheckedCart.filter(prod => !prod.isChecked)
            return {
                ...state,
                cart: [...uncheckedResults],
                ...getTotalCheque(uncheckedResults)
            }
        case CART_DEl_PROD_TOTALLY:
            return {
                ...state,
                cart: [...state.cart.filter(prod => prod.id !== action.id)],
                ...getTotalCheque([...state.cart.filter(prod => prod.id !== action.id)])
            }
        default:
            return state
    }
}