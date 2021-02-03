      import React,{useState} from "react";
      import { Form, Col, Row ,Button} from "react-bootstrap";
      import './AddMovie.css'
      import Modal from 'react-modal';

      const customStyles = {
            content: {
      width                 :'500px',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           :'-50%',
      transform             : 'translate(-50%, -50%)'
      }
      };
      
      Modal.setAppElement("#root")
      const AddMovie = ({AddNewMovie}) => {


            
            const [modalIsOpen, setIsOpen] = React.useState(false);
            
      const [Title, setTitle] = useState("");
      const [Year, setYear] = useState("");
      const [Plot, setPlot] = useState("");
      const [imdbRating, setimdbRating] = useState("");
      const [Poster, setPoster] = useState("");




            
      function openModal() {
      setIsOpen(true);
      }
      
      
      function closeModal(){
      setIsOpen(false);
      }
            
            
            return (
                  
                  <div>
            <button class="icon-btn add-btn">
            <div class="add-icon"></div>
            <div class="btn-txt" onClick={openModal}>+</div>
            </button>
            <Modal 
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            >
      
            
            <form>
                        <Form.Group as={Row} >
            <Form.Label column sm="2">
                  Title
            </Form.Label>
            <Col sm="10">
                  <Form.Control placeholder="Title" onChange={(e)=>setTitle(e.target.value)}   />
            </Col>
                                    </Form.Group>
                                    
            <Form.Group as={Row} >
            <Form.Label column sm="2">
                  Year
            </Form.Label>
            <Col sm="10">
                  <Form.Control placeholder="Year" onChange={(e)=>setYear(e.target.value)}   />
            </Col>
            </Form.Group>
            <Form.Group as={Row} >
            <Form.Label column sm="2">
                  Plot
            </Form.Label>
            <Col sm="10">
                  <Form.Control type="text" placeholder="Plot" onChange={(e)=>setPlot(e.target.value)} />
            </Col>
                        </Form.Group>
                        <Form.Group as={Row} >
            <Form.Label column sm="2">
                  Poster URL
            </Form.Label>
            <Col sm="10">
                  <Form.Control type="text" placeholder="PosterUrl" onChange={(e)=>setPoster(e.target.value)} 
      />
            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Row} >
            <Form.Label column sm="2">
                  Rate
            </Form.Label>
            <Col sm="10">
                  <Form.Control type="number" placeholder="Rate" onChange={(e)=>setimdbRating(e.target.value)} />
            </Col>
                              </Form.Group>
                                    <Button variant="outline-success" onClick={() => {
                                          AddNewMovie({
                                                Title: Title,
                                                Year: Year,
                                                Poster: Poster,
                                                Plot: Plot,
                                                imdbRating: imdbRating
                                          });
                                          closeModal()
                                    }
                                    }
                                    >Add</Button>




                                    
                        <Button variant="outline-danger" style={{float:'right'}}  onClick={closeModal}>close</Button>
                        
                  </form>
            </Modal>
                  </div>
                  
            )
      }

      export default AddMovie