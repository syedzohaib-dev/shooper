import React, { useContext, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { LoginRouteContext } from "../context/loginContext/LoginContext";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import Cart from "../Components/Cart";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaUserCircle, FaUserCheck } from "react-icons/fa";






// function NavigationBar() {

// const { state } = useContext(GlobalContext)
// console.log(state.isLoggedIn ? "logged in" : "not logged");
// const { state } = useContext(LoginRouteContext);
// const { user } = state;

const Header = () => {
    const { state, dispatch } = useContext(LoginRouteContext);
    const { user } = state;
    const [showCart, setShowCart] = useState(false);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products/categories")
            .then((response) => setCategories(response.data))
            .catch((error) => console.log(error));
    }, []);


    return (
        <>
            <Navbar expand="lg" className="bg-body-danger sticky-top" id='Navi'>
                <Container>
                    <Link className='nav-link' to="/"><h1>shOOper</h1></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            // style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='nav-link' as={Link} to="/">Home</Link>
                            <Link className='nav-link' as={Link} to="/products">Product</Link>
                            <Link className='nav-link' as={Link} to="/Category">Category</Link>
                            <Link className='nav-link' as={Link} to="/About">About</Link>


                        </Nav>

                        {/* <Link className=" btn mx-2" as={Link} to="/cart" style={{ backgroundColor: "#eabfff", color: "#300047" }}>
                            <BiCart />
                        </Link>
                        <Link className=" btn  mx-2" as={Link} to="/login" style={{ backgroundColor: "#eabfff", color: "#300047" }}>
                            Login
                        </Link>
                        <Link className=" btn mx-2" as={Link} to="/signup" style={{ backgroundColor: "#eabfff", color: "#300047" }}>
                            Sign Up
                        </Link> */}
                        {user ? (
                            <>
                                {/* <Link as={Link} to="/logout">
                                    Logout
                                </Link> */}

                                <button className="btn btn-outline-dark" onClick={()=> dispatch({type : "Logout"})}>
                                    Logout
                                </button>

                                <span className="mx-3">
                                    <FaUserCheck size={25} />Hi {user.email}
                                </span>
                                <Cart />
                            </>
                        ) : (
                            <>
                                {/* <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/signup">
                                        Sign Up
                                    </Nav.Link> */}
                                <Link className=" btn btn-danger mx-2" as={Link} to="/login">
                                    Login
                                </Link>
                                <Link className=" btn btn-danger mx-2" as={Link} to="/signup" >
                                    Sign Up
                                </Link>
                            </>
                        )}
                        {user && user.cart && user.cart.length > 0 && (
                            <div className="user__cart" onClick={() => setShowCart(true)}>
                                <FaUserCircle className="cart__icon" />
                                <span className="cart__badge">{user.cart.length}</span>
                            </div>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Offcanvas
                show={showCart}
                onHide={() => setShowCart(false)}
                placement="end"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {user && user.cart && user.cart.length > 0 ? (
                        user.cart.map((item, index) => (
                            <CartItems key={index} data={item} />
                        ))
                    ) : (
                        <p>No items</p>
                    )}
                    <div className="cart__footer">
                        {/* Include the appropriate dispatch function */}
                        <button
                            className="clear__cart__button"
                            onClick={() => dispatch({ type: "CLEAR_CART" })}
                        >
                            Clear-Cart
                        </button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>

    );

}

export default Header;