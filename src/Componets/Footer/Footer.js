import React from 'react'
import{Card} from 'react-bootstrap'
import { FaTwitter,FaFacebook, FaGithub } from "react-icons/fa"
import {IconContext} from "react-icons"

const Footer = () => {
      return (
      <Card style={{ position: 'relative',bottom: '0',width: "100%"}}>
      <Card.Body style={{display:'block',marginRight:'auto',marginLeft:'auto'}}>
      <Card.Title>Privacy Policy | Terms Of Service | Change Log</Card.Title>
      <Card.Text>
                        
            </Card.Text>
      <div style={{display:'flex',flexWrap:'wrap',flex: '1', justifyContent: 'space-around'}}>
      <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
            <FaTwitter />
      </IconContext.Provider> 

      <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>  
            < FaFacebook/>
      </IconContext.Provider> 
                              
      <IconContext.Provider value={{ style: {fontSize: '30px', color: "black"}}}>
            < FaGithub/>
      </IconContext.Provider>
      </div> 
                        
      </Card.Body>
      </Card>
      )
}

export default Footer