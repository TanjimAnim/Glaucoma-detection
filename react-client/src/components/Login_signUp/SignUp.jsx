import React,{useState} from 'react'
import {  Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import loginImg from '../images/login.png'
import Menu from '../Navigation_Bar/Menu';
import './Login_SignUp_Profile.css'


 const SignUp = () => {

  const navigate = useNavigate();

  const [userName_signUp, setUserName_signUp] = useState('')
  const [userDept_signUp, setUserDept_signUp] = useState('')
  const [userPass_signUp, setUserPass_signUp] = useState('')
  const [userMail_signUp, setUserMail_signUp] = useState('')

  /*const signUp = () => {
    Axios.post("http://localhost:3001/userinfo", {
      userName_signUp: userName_signUp,
      userDept_signUp: userDept_signUp,
      userPass_signUp: userPass_signUp,
      userMail_signUp: userMail_signUp,
    }).then((response) => {
      console.log(response);
    });
  }; */

 const button = () =>{
    // signUp()
    navigate("/")
  } 

 
   return (
    <>
  
      <title>SignUp page</title>
          <head></head>
             <body>
                 <div>
                 <Menu/>
                 
                  
                 
                   <div 
                   className="container my-4 mx-5 " 
                   style={{display: 'flex', 
                    justifyContent:'center', 
                    alignItems:'center'}}>
        
                  
                   <div className='col-lg-7 px-5 pt-5'> 
                  <div class="text-center">
                  <img 
                  className='icon-image' 
                  src={loginImg} 
                  alt='icon'
                 />
                 </div>
                    <h4 className='header'>
                     SignUp for your account
                      </h4> 
                     <Form>
                   
                       <input 
                     type='name' 
                     placeholder= 'Name'
                     className='form-control my-3 p-2'
                     onChange={(e) => {
                      setUserName_signUp(e.target.value);
                    }}
                     >
                       </input>

                       <input 
                     type='dept' 
                     placeholder= 'Dept'
                     className='form-control my-3 p-2'
                     onChange={(e) => {
                      setUserDept_signUp(e.target.value);
                    }}
                     >
                       </input> 

                       <input 
                     type='session' 
                     placeholder= 'Session'
                     className='form-control my-3 p-2'
                     onChange={(e) => {
                      setUserDept_signUp(e.target.value);
                    }}
                     >
                       </input> 



                     <input 
                     type='email' 
                     placeholder= 'Email-address'
                     className='form-control my-3 p-2'
                     onChange={(e) => {
                      setUserMail_signUp(e.target.value);
                    }}
                     >
                       </input> 
                     
                     <input 
                     type='password' 
                     placeholder= 'password' 
                     className='form-control my-3 p-2'
                     onChange={(e) => {
                      setUserPass_signUp(e.target.value);
                    }}
                     >
                       </input> 
                    
                     <button 
                     type='button' 
                     className='signup mt-3 mb-5'
                     onClick={button}
                    
                     >
                       SIGN UP
                       </button> 

                       <p 
                style={{color:'#0abde3'}}>
                  Already have an account?
                  <a 
                     style={{color:'#54a0ff'}} 
                     href='#'
                     onClick={()=>{navigate("/");}}>
                       Login Now..
                      </a>  
                    </p>   
                   
               </Form> 

           </div>
          </div> 
       </div> 
      </body> 
 
     </> 
   )
 }

export default SignUp;


