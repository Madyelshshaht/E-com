import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import { authlogout } from "@store/auth/authslice";

import HeaderLeftBar from "./HeaderLeftBar/HeaderLeftBar";

// Navigator
import { NavLink } from "react-router-dom"; // {NavLink} == <Link />

// bootstrap
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

//Styles
import styles from "./styles.module.css";
import { actGetWishlist } from "@store/wishlist/wishlistslices";

const { headerContainer, headerLogo } = styles;

const Header = () => {
    const dispatch = useAppDispatch();

    const { accessToken, user } = useAppSelector(state => state.auth)

    useEffect(() => {
        if(accessToken){
            dispatch(actGetWishlist("ProductIds"))
        }
    },[dispatch , accessToken])

    return (
        <header>
            <div className={headerContainer}>
                <h1 className={headerLogo}>
                    <span>Our </span>
                    <Badge bg="info">eCom</Badge>
                </h1>

                {/* LeftBar Component // ==>  Code Refactor */}
                <HeaderLeftBar />
            </div>

            <Navbar
                expand="lg"
                className="bg-body-tertiary"
                bg="dark"
                data-bs-theme="dark"
            >
                <Container>
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/categories">
                                Categories
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about-us">
                                About-Us
                            </Nav.Link>
                        </Nav>

                        <Nav>
                            {!accessToken ?
                                <>
                                    <Nav.Link as={NavLink} to="/login">
                                        Login
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/register">
                                        Register
                                    </Nav.Link>
                                </> :
                                <div className="d-flex gap-2">
                                    <FontAwesomeIcon icon={faUserTie} color="white" size="lg" style={{ marginTop: "11px" }} />
                                    <NavDropdown title={`${user?.firstName} ${user?.lastName}`} id="basic-nav-dropdown">
                                        <NavDropdown.Item as={NavLink} to="profile" end >Profile</NavDropdown.Item>
                                        <NavDropdown.Item as={NavLink} to="profile/orders">Orders</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={NavLink} to="/" onClick={() => dispatch(authlogout())}>
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
