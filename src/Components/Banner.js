import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

export default function Banner() {
    return (
        <div >
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Weather Update</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/" id='Home'><Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="/devinfo" id='devinfo'><Link to="/devinfo">Developer Info</Link></Nav.Link>
    </Nav>
  </Navbar>
         </div>
    )
}
