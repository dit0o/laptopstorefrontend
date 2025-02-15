import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:5000/api/orders", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setOrders(response.data);
            } catch (error) {
                console.error("Error fetching orders", error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Admin Dashboard 🛠️</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                orders.map((order) => (
                    <div key={order.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
                        <h3>Order ID: {order.id}</h3>
                        <p><strong>User ID:</strong> {order.userId}</p>
                        <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
                        <p><strong>Products:</strong> {JSON.parse(order.products).join(", ")}</p>
                        <p><strong>Ordered At:</strong> {new Date(order.createdAt).toLocaleString()}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default AdminDashboard;
