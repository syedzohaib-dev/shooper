import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Page404 from './Pages/Page404';
import Category from './Pages/Category';
import About from './Pages/About';
import Footer from './Components/Footer';
import ProductPage from './Pages/ProductPage';
// import CartItem from "./Components/CartItems";
// import { GlobalContext } from './context/login/Context';
// import Cart from './Components/Cart';
// import { useContext } from 'react';


function App() {
  const [user, setUser] = useState(false)
  return (
    <>

      <NavigationBar />

      {
        user

          ?
            (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Product />} />
                <Route path="/products/:productID" element={<ProductPage />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/cart" element={<Cart />} /> */}
                <Route path="/product/category/:categoryName" element={<Category />} />
              
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="*" element={<Navigate to="/login" replace={true} />} /> */}
              </Routes>
            )}
        <Footer />
     
    </>
  );
}


export default App;
