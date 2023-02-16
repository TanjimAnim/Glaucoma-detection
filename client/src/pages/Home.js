import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import './Home.css'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Home(props) {

  const [signSelect, setSignSelect] = useState(true);
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vemail,setVemail] = useState();
  const [vpass, setVpass] = useState();
  const [emailerr, setEmailerr] = useState("")
  const [age,setAge] = useState("");
  const [ivage,setIvage] = useState();
  const [gender, setGender] = useState("0");
  const [toastVis,setToastVis] = useState(false);
  const [toastMessage, setToastMeassage] = useState("");

  const navigate = useNavigate();





  let navOnclick = e =>{
    setSignSelect(!signSelect)
  }

  let loginB = e =>{
    e.preventDefault();
    if(password.length===0){
      setVpass(true);
      return
    }else setVpass(false)
    if(email.length===0||!(email.includes('@') && email.includes('.com'))){
      setVemail(true);
      setEmailerr("Not a valid email. Example: name@gmail.com");
      return
    }else setVemail(false)
    
    const data = {"email": email, "password":password}

    fetch('/login', {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    }).then(resp => {
      resp.json().then(data => {
        if(data.error==="none"){
          props.setId(data.id);
          // setToastVis(true);
          setToastMeassage("SignIn Successful");
          toast.success("Sign in Successful");
          
          navigate('/features');
        }else{
          // setToastVis(true);
          // setToastMeassage("Wrong Credential Information");
          toast.warning("Wrong credential information");
        }
      })
    })
  }

  let register = e=>{
    e.preventDefault();
    if(password.length===0){
      setVpass(true);
      return
    }else setVpass(false)
    if(email.length===0||!(email.includes('@') && email.includes('.com'))){
      setVemail(true);
      setEmailerr("Not a valid email. Example: name@gmail.com");
      return
    }else setVemail(false)
    if(age.length===0){
      setIvage(true);
      return;
    }else setIvage(false)

    const data = {"email":email,
                  "password":password,
                  "age":age,
                  "gender":gender,
                  "year": new Date().getFullYear()}
    fetch('/register', {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    }).then(resp => {
      resp.json().then(data => {
        if(data.error==="none"){
          // setToastVis(true);
          // setToastMeassage("User created");
          toast.info("User created");
        }else{
          // setToastVis(true);
          // setToastMeassage("User Already Registered");
          toast.info("User Already Registered");
        }
      })
    })
  }

  return (
   
    <>
    {/* <div className="wrapperContainer" style={ { background: 'url("../images/bg1.jpg") no-repeat center center fixed' } }>  */}
   
      <Navbar selectLogin={signSelect} onClick={navOnclick}/>
      <div className='wrap-main'>
      <Toast show={toastVis} onClose={ e => {setToastVis(!toastVis)} }>
        <Toast.Header>
          <img
            src={require('../images/logo71.png')}
            className="rounded me-2 sm"
            alt=""
          />
          <strong className="me-auto">Notification</strong>
          <small>Just Now</small>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
     <ButtonGroup className='btngrp'>
        <ToggleButton
        className='btn-1' 
          type="radio"
          variant={'outline-success'}  
          name="radio"
          checked={signSelect}
          onChange={e => {}}
          onClick={ e => setSignSelect(true) }
        >Sign In</ToggleButton>
        <ToggleButton
        className='btn-2'
          type="radio"
          variant={'outline-success'}
          name="radio"
          checked={!signSelect}
          onChange={e => {}}
          onClick={ e => setSignSelect(false) }
        >Register</ToggleButton>
      </ButtonGroup> 

      <Form className={signSelect?"pad wi":"no-display"}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='text-label' class="font-weight-bold">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" isInvalid={vemail} value={email} onChange={e=>setEmail(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            {emailerr}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" hasValidation>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required isInvalid={vpass} onChange={e=>setPassword(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Invalid Password.
          </Form.Control.Feedback>
        </Form.Group>
        
        <Button className='btn-home' variant="success" class="btn btn-success btn-lg btn-block"  type="submit" onClick={loginB} size="lg" style={{width:"100%", marginLeft:"auto", marginRight:"auto", marginTop: '5%'}}>
          Log In
        </Button>
       
      </Form>
      
      <Form className={!signSelect?"pad":"no-display"}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" isInvalid={vemail} value={email} onChange={e=>setEmail(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            {emailerr}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" hasValidation>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required isInvalid={vpass} value={password} onChange={e=>setPassword(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Invalid Password.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAge" hasValidation>
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Age" required isInvalid={ivage} value={age} onChange={e=>setAge(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Invalid Age.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGender">
          <Form.Label>Gender</Form.Label>
          <Form.Select aria-label="Default select example" onChange={(e)=>{setGender(e.target.value)}}>
            <option value="0">Male</option>
            <option value="1">Female</option>
          </Form.Select>
        </Form.Group>

        <Button className='btn-home' variant="success" type="submit" onClick={register} size="lg" style={{width:"100%", marginLeft:"auto", marginRight:"auto",  marginTop: '5%'}}>
          Register
        </Button>
      </Form>

      </div>
      
    </>
    
  )
}

export default Home