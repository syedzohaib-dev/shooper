import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css'
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi'



function NavigationBar() {

    // const { state } = useContext(GlobalContext)
    // console.log(state.isLoggedIn ? "logged in" : "not logged");
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
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="/Product">Product</Link>
                            <Link className='nav-link' to="/Category">Category</Link>
                            <Link className='nav-link' to="/About">About</Link>


                        </Nav>
                
                            <Link className=" btn mx-2" to="/cart" style={{ backgroundColor: "#eabfff", color: "#300047" }}>
                                <BiCart />
                            </Link>
                            <Link className=" btn  mx-2" to="/login" style={{ backgroundColor: "#eabfff", color: "#300047" }}>
                                Login
                            </Link>
                            <Link className=" btn mx-2" to="/signup" style={{ backgroundColor: "#eabfff", color: "#300047" }}>
                                Sign Up
                            </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );

}

export default NavigationBar