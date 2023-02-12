import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import './Home.css'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Home() {

  const [signSelect, setSignSelect] = useState(true);
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vemail,setVemail] = useState();
  const [vpass, setVpass] = useState();

  let navOnclick = e =>{
    setSignSelect(!signSelect)
  }

  let loginB = e =>{
    e.preventDefault();
    if(password.length===0) setVpass(false);
    if(email.length===0) setVemail(false);
  }

  return (
    <>
      <Navbar selectLogin={signSelect} onClick={navOnclick}/>
      <div className='wrap-main'>
      <ButtonGroup className='btngrp'>
        <ToggleButton
          type="radio"
          variant={'outline-success'}
          name="radio"
          checked={signSelect}
          onChange={e => {}}
          onClick={ e => setSignSelect(true) }
        >Sign In</ToggleButton>
        <ToggleButton
          type="radio"
          variant={'outline-success'}
          name="radio"
          checked={!signSelect}
          onChange={e => {}}
          onClick={ e => setSignSelect(false) }
        >Register</ToggleButton>
      </ButtonGroup>

      <Form className={signSelect?"pad":"no-display"}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" isValid={vpass} value={email} onChange={e=>setEmail(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Not registered.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" isValid={vpass} value={password} onChange={e=>setPassword(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Invalid Password.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={loginB}>
          Submit
        </Button>
      </Form>
      
      </div>
    </>
  )
}

export default Home