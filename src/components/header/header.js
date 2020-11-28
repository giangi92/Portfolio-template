import React, { useState, useEffect } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { smoothScrollAnchor } from "smooth-scroll-anchor";
import SocialIcons from '../social-icons/social-icon';

const Header = () => {

    const [isOnTop, setIsOnTop] = useState(true);

    smoothScrollAnchor({
        behaviour: "smooth", // [smooth | auto] Smooth animated scroll or instant
        block: "start", // [start | center | end | nearest] Alignment of the target element when it's finished scrolling
        //offset: 200 // Optional offset of the target scroll position. Handy if you have a fixed header!
    });

    useEffect(()=>{
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY < 150
            if (scrollCheck !== isOnTop) {
                setIsOnTop(scrollCheck)
            }
        })
    })

    return (
        <div>
            <Navbar bg={isOnTop ?"":""} variant="dark" expand="lg" className="fixed-top header-scrolled ">
                <Navbar.Brand href="#img_principale">Giangisoft</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mx-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#link">Services</Nav.Link>
                        <Nav.Link href="#link">Portfolio</Nav.Link>
                        <Nav.Link href="#link">Team</Nav.Link>
                        <NavDropdown  title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                    <SocialIcons></SocialIcons>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;