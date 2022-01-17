import { Navbar, Nav} from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const HomeNavbar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav' id ="navbar">
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-center'>
                <Nav className="">
                
                <Nav.Link className='mr-3' href="#features">TRENDING</Nav.Link>
                <Nav.Link className='mr-3' href="#features">PODCAST</Nav.Link>
                <Nav.Link className='mr-3' href="#Movies">MOODS AND GENRES</Nav.Link>
                <Nav.Link className='mr-3' href="#Recently Added">NEW RELEASES</Nav.Link>
                <Nav.Link className='mr-3' href="#My List">DISCOVER</Nav.Link>

                </Nav>
                
                
                                
                
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default HomeNavbar