import React from 'react'
import SNavbar from '../components/SNavbar'
import Form from 'react-bootstrap/Form';
import './ClinicalDataPrediction.css'


function ClinicalDataPrediction(props) {
  return (
    <>
        <SNavbar setId={props.setId}/>
        <div className='wrap-main'>
          <Form className='pad'>
            
          </Form>
        </div>
    </>
  )
}

export default ClinicalDataPrediction