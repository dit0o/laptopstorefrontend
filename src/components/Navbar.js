import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isAdmin");
        navigate("/login");
    };

    return (
        <nav style={{ background: "#333", padding: "10px", color: "white", display: "flex", gap: "15px" }}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>🏠 Home</Link>
            <Link to="/products" style={{ color: "white", textDecoration: "none" }}>💻 Products</Link> {/* ✅ Added */}
            <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>🛒 Cart</Link>
            {token && <Link to="/orders" style={{ color: "white", textDecoration: "none" }}>📜 Order History</Link>}
            {token && <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>👤 Profile</Link>}
            {isAdmin && <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>🛠️ Admin Dashboard</Link>}
            {!token ? (
                <>
                    <Link to="/login" style={{ color: "white", textDecoration: "none" }}>🔑 Login</Link>
                    <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>📝 Signup</Link>
                </>
            ) : (
                <button onClick={handleLogout} style={{ background: "red", color: "white", border: "none", cursor: "pointer" }}>
                    🚪 Logout
                </button>
            )}
        </nav>
    );
};

export default Navbar;
