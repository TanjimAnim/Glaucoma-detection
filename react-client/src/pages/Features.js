import React from 'react'
import { useNavigate } from 'react-router-dom'
import SNavbar from '../components/SNavbar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function Features(props) {

  const navigate = useNavigate();

  return (
    <>
      <SNavbar setId={props.setId}/>
      <div style={{display:'flex'}}>
        <div style={{paddingLeft:'30px', paddingRight:'30px',paddingTop:'10px',paddingBottom:'10px'}}>
          <Card bg='dark' text='white' style={{ width: '18rem',}}>
          <Card.Img variant="top" src={require('../images/fundus-logo.jpg')} style={{minHeight:"10rem"}}/>
            <Card.Body>
              <Card.Title>Predict with Fundus Image</Card.Title>
              <Card.Text>
                Gives prediction whether the eye is diagnosed with Glaucoma. Requires retinal Fundal images of the eye.
              </Card.Text>
              <Button variant="primary" onClick={e=>{navigate('/fundusImagePrediction')}}>Take me there</Button>
            </Card.Body>
          </Card>
        </div>

        <div style={{paddingLeft:'30px', paddingRight:'30px',paddingTop:'10px',paddingBottom:'10px'}}>
          <Card bg='dark' text='white' style={{ width: '18rem'}}>
          <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Features