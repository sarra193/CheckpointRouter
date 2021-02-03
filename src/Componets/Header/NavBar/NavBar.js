import React from 'react'
import { Navbar, Nav, FormControl, Form } from 'react-bootstrap'
import Rate from '../Rate/Rate'
const NavBar = ({  setSearch,rating ,handleChange}) => {
      

      return (
            <Navbar bg="dark" variant="dark">

      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                  <Nav className="mr-auto">
                        
            <Nav.Link >Home</Nav.Link>
      
      
                  </Nav>

                  <Form style={{marginRight:'400px'}} >
            <Rate 
            count={5}
            size={40}
            value={rating}
            activeColor ={'red'}
            inactiveColor={'#ddd'}
            onChange={ handleChange} /> 
                  </Form>    
                  
      <Form inline>
            <FormControl type="text" placeholder="Search"  onChange={ e => setSearch(e.target.value) }  className="mr-sm-2" />
      </Form>               


      
      </Navbar>
            
      )
}

export default NavBar