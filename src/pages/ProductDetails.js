import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext"; // Import useCart Hook

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart(); // Get addToCart function from context

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details", error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return <h2>Loading...</h2>;

    return (
        <div style={{ padding: "20px" }}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} style={{ width: "300px", height: "200px", objectFit: "cover" }} />
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <button
                onClick={() => addToCart(product)}
                style={{ background: "green", color: "white", padding: "10px", border: "none", cursor: "pointer" }}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductDetails;
