import React from 'react';
import logo from './design-751452_1280.png'
import avatar from './avatar-user-3814081.jpg'
import Home from "../pages/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Photos from "../pages/Photos";

import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavDropdown, NavLink} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Route, Routes, Links} from "react-router-dom";

const Header = () => {
    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container fluid>
                    <NavbarBrand href="/" >
                        <img src={logo}
                             height="150"
                             width="280"
                             className="d-inline-block align-top"
                             alt="Logo"
                        />
                    </NavbarBrand>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />

                    <NavbarCollapse id="responsive-navbar-nav"
                                    aria-labelledby="responsive-navbar-nav"
                                    placement="end">

                        <Nav className="me-auto my-2 my-lg-0">

                            <NavLink href="/home"> Home</NavLink >
                            <NavLink href="/about">About</NavLink>
                            <NavLink href="/contacts">Contacts</NavLink>
                            <NavLink href="/photos">Photos</NavLink>
                            <NavDropdown title="Additionally" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Events</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">New</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">More deets</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>

                        <Form inline="true" className="d-flex">
                            <FormControl
                                unline="true"
                                type="text"
                                className="me-sm-2"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <Button variant="outline-warning">Search</Button>
                            <div className="d-flex flex-row-reverse">
                                <div className="p-2">Flex item 1</div>
                                <div className="p-2">Flex item 2</div>
                            </div>
                        </Form>

                        <Navbar.Text>
                            <img src={avatar}
                                 height="40"
                                 width="40"
                                 className="d-flex flex-column"
                                 alt="Avatar"
                            />
                            <a href="#login">Elena Stankevich</a>
                        </Navbar.Text>
                    </NavbarCollapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/home" element={<Home />}/>
                 <Route path="/about" element={<About />}/>
                 <Route path="/contacts" element={<Contacts />}/>
                 <Route path="/photos" element={<Photos />}/>

            </Routes>
        </>
    );
};

export default Header;