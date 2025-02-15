import React, { useState, useEffect } from "react";
import { getProducts } from "../api/product";
import { useCart } from "../context/CartContext";  // ✅ Correct import

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();  // ✅ Use `useCart()` instead of `useContext(CartContext)`

    const [searchQuery, setSearchQuery] = useState("");
    const [brandFilter, setBrandFilter] = useState("");
    const [priceRange, setPriceRange] = useState(2000); // Max price filter

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError(err.message || "Error fetching products");
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Filtered products based on search and filter options
    const filteredProducts = products.filter((product) => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (brandFilter === "" || product.brand === brandFilter) &&
        product.price <= priceRange
    );

    if (loading) return <h3>Loading...</h3>;
    if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

    return (
        <div>
            <h2>Products</h2>

            {/* Search and Filter Controls */}
            <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            
            <select onChange={(e) => setBrandFilter(e.target.value)}>
                <option value="">All Brands</option>
                <option value="Apple">Apple</option>
                <option value="Dell">Dell</option>
                <option value="HP">HP</option>
                <option value="Lenovo">Lenovo</option>
            </select>

            <input
                type="range"
                min="500"
                max="5000"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
            />
            <span>Max Price: ${priceRange}</span>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                {filteredProducts.map((product) => (
                    <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
                        <h3>{product.name}</h3>
                        <p><strong>Brand:</strong> {product.brand}</p>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <p><strong>Stock:</strong> {product.stock}</p>
                        <p>{product.description}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
