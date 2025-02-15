import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
    const { cart, removeFromCart, clearCart, checkout } = useCart();

    return (
        <div style={{ padding: "20px" }}>
            <h2>Your Cart 🛒</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((item, index) => (
                        <div key={index} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
                            <h3>{item.name}</h3>
                            <p><strong>Price:</strong> ${item.price}</p>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                style={{ background: "red", color: "white", padding: "5px", border: "none", cursor: "pointer" }}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={clearCart}
                        style={{ background: "orange", color: "white", padding: "10px", border: "none", cursor: "pointer", marginRight: "10px" }}
                    >
                        Clear Cart
                    </button>
                    <button
                        onClick={checkout}
                        style={{ background: "blue", color: "white", padding: "10px", border: "none", cursor: "pointer" }}
                    >
                        Checkout
                    </button>
                </>
            )}
        </div>
    );
};

export default CartPage;
