import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  useNavigate,
  Link
 } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar  expand="lg"  className="bg-body-tertiary  ">
      <Container fluid>
          <Navbar.Brand >
            <Link to="/">  Todo Notes</Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className=' m-auto'>
            <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           
          </Form>
            </Nav>
          <Nav
            className=" me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/mynotes">My Notes</Nav.Link>
            <NavDropdown title="Aditya" id="navbarScrollingDropdown">
              
              <NavDropdown.Item href="#action4">
                My Profile
              </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                  localStorage.removeItem("userInfo")
                  
                        navigate("/");
                }}
                >
                Logout
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
             
            </NavDropdown>
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
