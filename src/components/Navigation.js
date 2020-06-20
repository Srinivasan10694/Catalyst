import React from 'react'
import {Link,NavLink,Switch } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

export const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home"  >Catalyst</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Navbar>
      
        
    )
}
