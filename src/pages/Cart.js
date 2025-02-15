import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, removeFromCart, checkout } = useContext(CartContext);

    const token = localStorage.getItem("token"); // Retrieve user token from localStorage

    if (cart.length === 0) return <h3>Your cart is empty</h3>;

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.map((item) => (
                <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}

            <button onClick={() => checkout(token)} style={{ marginTop: "20px", padding: "10px", fontSize: "16px" }}>
                Checkout
            </button>
        </div>
    );
};

export default Cart;
