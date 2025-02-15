import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const token = localStorage.getItem("token"); // Get user token

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/orders/user", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setOrders(response.data);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders();
    }, [token]);

    if (orders.length === 0) return <h3>You have no orders yet.</h3>;

    return (
        <div>
            <h2>My Orders</h2>
            {orders.map((order) => (
                <div key={order.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                    <h3>Order ID: {order.id}</h3>
                    <p>Total Amount: ${order.totalAmount}</p>
                    <p>Products: {JSON.parse(order.products).join(", ")}</p>
                </div>
            ))}
        </div>
    );
};

export default Orders;
