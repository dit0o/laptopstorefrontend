import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Products from "./pages/Products";  // ✅ Import Products Page
import ProductDetails from "./pages/ProductDetails";  // ✅ Import Product Details Page
import OrderHistory from "./pages/OrderHistory";
import Orders from "./pages/Orders";
import CartPage from "./pages/CartPage";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar"; // Ensure navigation exists

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} /> {/* ✅ Set default to Products */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/products" element={<Products />} />  {/* ✅ Products Page */}
                <Route path="/product/:id" element={<ProductDetails />} />  {/* ✅ Product Details */}
                <Route path="/order-history" element={<OrderHistory />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
