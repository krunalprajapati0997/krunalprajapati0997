import React from 'react'
import {Nav,Navbar,Button,Container,Form,FormControl,NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import PagesIcon from '@material-ui/icons/Pages';
import blog from './blog';


function Nav1() {
  return (
      <>
    <div>
    
        <Navbar bg="light" variant="light" expand="lg" >
    <Container fluid >
      
    
    <div className="col-xl-2 col-lg-2 col-md-1 mx-5" >
        <div className="logo">
          <a href="index.html"><img src="data:image/webp;base64,UklGRqAEAABXRUJQVlA4TJMEAAAv0gAMEH9kkG2kopzH+5PtIQQCSSj7qywlEEhxKDPsuJEkRdqqriH/DTx6ngHUpLZtG8ZtcsoduFYAQBgQMSAAggEwAIAACMAEcABMAIaJBWHCIBCEYUIARp9hgjggDoABYmLCABDoYRCAAACAIBCCgVgQAEEwEASA+wsEABAE8UYiEQgEHI5GI/HBC4lCopBIJOr1SgQSjRscDUcj4Gg4HIVGoeFwOKjd2qTIbd5w0mYUtFnUoXXEmrDZFmOtzCAMszlsxv/sqaruEvR8jeg/BLdtJEnyVHdP9rJT1cfOEyD0Yu76o1lUjO7U6/W5649RKVqoM83ffIrK0HM2KqZwq65r4fZzVIDmGdVSeFpP0uLdF8i5btRTtZzxwuwcI7Xw10tkWY/qNn2LLOsPI38jxzp7zTYuXUSO9dC4/x5Z1m9G/o2Z9FJR8w0tIYT9TjOyTRpsUKwxzxE721Qj2xTLzr/KEBoQDRG3YQl97qptXL6AiEhRrxrGHxNmOpU8QXPYybtUkK4iao6CPKqNcSOD+xEJgagNS+j7xv2PSIeoRZrp1LyMeSVuxMwK0sCPRG9sWEL/YuR/E7QtIQwReTWuktGtHA1jEXM2DKHPX7GNK+eT6PS+pWAG1KYNdoZe0TbNTQghDLI+iTJbnMdEWZjTy46PItQGxZKxkRz6nnH/MxIQ+cqox7T0LcxCvMHClzLN/NuLhJ7EjBxjk9HC8myzkRz6JyP3DNRknKDOoisbPBaNW6woY+VUO0APZCE19IXLtnH1nIHeMrRszqC01SJOJD3usZXER652g8yjidTQ/xn3vyKdwH6xclZLW05pdYiuHgtFqZrwoV3sxAK0kRr6ByMPANuP+ch6geoi4cdMECWvgmAnMfTFS7Zx7ayRTqwYYw1YT/xj3P8OE2NBO9N6pa2GJAaDg41QqkU7C0Xf+WVizERq6O+MPMTG5iSKIB7llMDk9JANWtxCuXKav0VtRg3Qbgy9JlJDf2Mbc7NoPfOWmjRhhQHAfuIzpLRiUI3rFZ8r9YuOiZ3SphYL6aFf3F02cB34jD6yIhYdFR5wYSwhfady7VwBlLdjwQG+YNNieWoxhX5VWErlETbN0NQuOw0UURGJu409s6wg6I2F8PFzXbsx2UIDeH57IWXMA+1EdOR1M2jRwxxzanr5B/avIO6YHqJF9Sek2LWEfqdjZ3LhJvBV6a/dDvygEqaW8H/IILsfrhxwNSXDoIcJU+hApz7Yzj8ZvTmv8wxbmMHxzXbgApvUsU6PSHrlylFbQQDfOcZmOjjYMIV+4yQRHX8/obAAdHD3/VgZNXiHtSOnfayA1QndOE3ECvyC+OT6HOM2cFTMyH7kV4dJ6GjHFgCYfVQWnmO7sDOwFfnVu0NECYU/gfeZk5EDyLL2kq6v2zdxOydKF10OmVZP5EUzX5aFnUR0ugnZ1oZRomjhi9bDNPnhm8i4DlKSPt+BrOu1TxOORg+9hsxr+0R0dG9A/hUiR4N7UAV646R2NPXx26gGNU7LcWQ3KkPieWy87XVUh/jzWN8mVIr2Eg3vQ9Wo+5P3kH8BAA==" alt="" data-pagespeed-url-hash={3845301560} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /></a>
        </div>
      </div>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
          <Nav.Link href="/" className='mb-3 my-2'><HomeIcon/>    Home</Nav.Link>
          <Nav.Link href="/about" className='mb-3 my-2' >About</Nav.Link>
         <Nav.Link href="/services" className='mb-3 my-2'>Services</Nav.Link>
         <Nav.Link href="/portfolio" className='mb-3 my-2'>Portfolio</Nav.Link>
         <Nav.Link href="/not" className='mb-3 my-2'></Nav.Link>
         {/* <Nav.Link href="/page">Page</Nav.Link> */}
          
         <NavDropdown title="Page" id="navbarScrollingDropdown" className='mb-3 my-2'>
                    <nav>
            
           
            
            <ul class="submenu">
            <li><a href="blog">Blog</a></li>
            <Nav.Link href="/nav1/blog">Blog</Nav.Link>
            <li><a href="blog_details.html">Blog Details</a></li>
            <li><a href="elements.html">Element</a></li>
            <li><a href="portfolio_details.html">Portfolio Details</a></li>
           
            
            <li><a href="contact.html" >Contact</a></li>
            </ul>
            </nav>
         
          {/* <NavDropdown.Item href="#action3">Blog</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Blog Details</NavDropdown.Item>
          <NavDropdown.Item href="#action3">Element</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Portfolio</NavDropdown.Item> */}
       
         
         
        </NavDropdown>
         <Nav.Link href="/contact" className='mb-3 my-2'><ContactsIcon />      Contact</Nav.Link>
          
          </Nav>
        <Form className="d-flex">
         
          <Button variant="danger">Get Free Consultent</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  <div>
  <Navbar bg="light" variant="light" expand="lg" >
    <Container fluid >
      </Container>
  </Navbar>
  </div>
  </>
  )
}
export default Nav1
