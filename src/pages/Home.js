import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Welcome to Laptop Store 💻</h1>
            <p>Find the best laptops at the best prices.</p>

            <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
                <Link to="/products" style={{ padding: "10px 20px", background: "#007bff", color: "white", textDecoration: "none", borderRadius: "5px" }}>
                    🛒 Browse Products
                </Link>

                <Link to="/cart" style={{ padding: "10px 20px", background: "#28a745", color: "white", textDecoration: "none", borderRadius: "5px" }}>
                    🛍️ View Cart
                </Link>
            </div>

            <img 
                src="https://source.unsplash.com/800x400/?laptop,technology" 
                alt="Laptop Banner" 
                style={{ marginTop: "20px", width: "100%", maxWidth: "800px", borderRadius: "10px" }}
            />
        </div>
    );
};

export default Home;
