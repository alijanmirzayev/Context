import { createContext, useState } from 'react'

export const CartContext = createContext({
    carts: [],
    setcarts: (item) => { }
})

export const CartProvider = ({ children }) => {

    const [carts, setcarts] = useState([])

    const values = {
        carts,
        setcarts
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )

}