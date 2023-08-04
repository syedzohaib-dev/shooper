import React, { createContext, useEffect, useReducer } from 'react'
import { reducer } from '../cartContext/CartReducer'

const getCartData = () => {
    let cartData = localStorage.getItem('cart')
    if (cartData == []) {
        return []
    }
    else {
        return JSON.parse(cartData)
    }

}

const initialData = {
    cart: getCartData()
}

export const CartContext = createContext("Initial Value")

export default function CartContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialData)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart])

    return (
        <>

            <CartContext.Provider value={{ state, dispatch }}>
                {children}
            </CartContext.Provider>
        </>

    )
}