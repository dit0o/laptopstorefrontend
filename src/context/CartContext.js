import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add Item to Cart
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    // Remove Item from Cart
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Clear Cart
    const clearCart = () => {
        setCart([]);
    };

    // Checkout Function
    const checkout = async () => {
        try {
            const token = localStorage.getItem("token"); // Get token
            if (!token) {
                alert("Please login to place an order.");
                return;
            }

            const productIds = cart.map((item) => item.id);
            await axios.post(
                "http://localhost:5000/api/orders",
                { products: productIds },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            alert("Order placed successfully!");
            clearCart(); // Clear the cart after successful order
        } catch (error) {
            console.error("Checkout failed", error);
            alert("Checkout failed. Try again.");
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, checkout }}>
            {children}
        </CartContext.Provider>
    );
};
