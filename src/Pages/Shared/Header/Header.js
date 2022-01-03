import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  
  const navItemStyle = {
    fontWeight: "500",
    color: "blue",
    fontSize: "16px",
    backgroundColor: "transparent",
    textDecoration: "none",
    border: "3px solid #0d6efd",
    padding: "7px 15px",
    borderRadius: "4px",
    margin: "0 10px",
    fontWeight: "700",
  }
  
  const navItemStyleForDashboard = {
    fontWeight: "500",
    color: "#fff",
    fontSize: "16px",
    backgroundColor: "black",
    textDecoration: "none",
    border: "3px solid #0d6efd",
    padding: "7px 15px",
    borderRadius: "4px",
    margin: "0 10px",
    fontWeight: "700",
  }

  const activeStyle = {
    color: "#fff",
    backgroundColor: "blue",
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="header-top-contact d-flex justify-content-between py-3">
              <div>
                <span className="contact-email me-4">
                <i class="far fa-envelope me-2"></i> bbra@gmail.com
                </span>
                <span className="contact-number">
                <i class="fas fa-phone-volume me-2"></i> +8801777777777
                </span>
              </div>
              <div>

              {
                user.email ?  
                <div>
                <span className="fw-bold text-primary user-name" style={{fontSize:"15px"}}>{user.displayName}</span>                  
                <Button onClick={logout} id="logout-btn" className="navbar-link bg-danger ms-3">Logout</Button></div>
                    :
                <div>
                  <Link className="login me-4" to="/login"><i class="fas fa-sign-in-alt me-2"></i> Login</Link>
                  <Link className="register" to="/register"><i class="fas fa-unlock-alt me-2"></i> Register</Link>
                </div>
              }
            
              </div>
            </div>
            
          </Col>
        </Row>
      </Container>
      <Navbar bg="light" expand="lg" className="py-3 border-top border-bottom border-1 border-primary">
        <Container>
          <Navbar.Brand href="/home" className="logo-font" style={{color:"#0d6efd",fontSize:"30px",fontWeight:"700"}}>BBRA</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink activeStyle={activeStyle} style={navItemStyle} to="/home">Home</NavLink>
              <NavLink activeStyle={activeStyle} style={navItemStyle} to="/about">About Us</NavLink>
              <NavLink activeStyle={activeStyle} style={navItemStyle} to="/books">Books</NavLink>
              <NavLink activeStyle={activeStyle} style={navItemStyle} to="/members">Members</NavLink>
              <NavLink activeStyle={activeStyle} style={navItemStyle} to="/contact">Contact</NavLink>
              {
                user.email && 
                <NavLink activeStyle={activeStyle} style={navItemStyleForDashboard} to="/dashboard">Dashboard</NavLink> 
              }
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search Book"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className="top-search-field">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>








    {/* navbar part start */} 
    { /*  <Navbar expand="lg" className="main-navigation w-100 border-bottom border-2 border-primary">
        <Container className="main-navigation-container">
          <Navbar.Brand href="/home" className="brand-logo"> 
            Awesome Furniture
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="brand-bg mx-auto mb-3" />
              <Navbar.Collapse id="basic-navbar-nav">              
                <Nav className="m-auto">
                  <NavLink activeStyle={activeStyle} className="navbar-link" to="/home">Home</NavLink>
                  <NavLink activeStyle={activeStyle} className="navbar-link" to="/about">About</NavLink>
                  <NavLink activeStyle={activeStyle} className="navbar-link" to="/explore">Explore</NavLink>
                  <NavLink activeStyle={activeStyle} className="navbar-link" to="/contact">Contact</NavLink>
                  {
                    user.email && 
                    <NavLink activeStyle={activeStyle} className="me-2 navbar-link" to="/dashboard">Dashboard</NavLink> 
                  }
                  
                  {
                    user.email ?  
                    <div>
                    <span className="fw-bold text-primary user-name" style={{fontSize:"15px"}}>{user.displayName}</span>                  
                    <Button onClick={logout} id="logout-btn" className="navbar-link bg-danger">Logout</Button></div>
                        :
                    <div>
                      <NavLink activeStyle={activeStyle} className="navbar-link header-login" to="/login">Login</NavLink> 
                      <NavLink activeStyle={activeStyle} className="navbar-link header-register" to="/register">Register</NavLink> 
                    </div>
                  }
                
                </Nav>
          </Navbar.Collapse> 
          <div className='header-social-link'>
            <span className='header-icon border border-1 border-dark text-white bg-dark'><i class="fas fa-shopping-cart"></i></span>
            <span className='header-icon border border-1 border-primary text-white bg-primary'><i class="fab fa-facebook-f"></i></span>
            <span className='header-icon border border-1 border-info text-white bg-info'><i class="fab fa-twitter"></i></span>
            <span className='header-icon border border-1 border-danger text-white bg-danger'><i class="fab fa-youtube"></i></span>
          </div>

          {/*<div className="text-center search-portion">
            <input className='w-100 border border-2 search-input' type="text" name="" />
            <i class="fas fa-search search-icon"></i>
                </div>*/}
          
      { /*</div>  </Container>         
                
      </Navbar>
      <div style={{backgroundColor:"#d9ecf1"}}>
        <Container>  
          <Row>
            <Col>
              <div className="text-center search-portion py-3">
                <input className='w-50 border border-2 search-input' type="text" name="" />
                <button className="btn btn-primary search-btn fw-bold btn-lg">Search</button>
              </div>
            </Col>
          </Row>
        </Container> 
      </div> */}
      
      {/* <Container>
        <Row className='justify-content-center'>
          <Col lg={9} className="py-4">
            <div className="w-100 text-center search-portion">
              <input className='w-100 border border-2 search-input' type="text" name="" />
              <i class="fas fa-search search-icon"></i>
            </div>
          </Col>
        </Row>
      </Container> */}        
            
    </div> 
  );
};

export default Header;

