import React,{useState} from 'react'
import {  Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import loginImg from '../images/login.png'
import Menu from '../Navigation_Bar/Menu';
import './Login_SignUp_Profile.css'




//toast.configure()
 const Login = () => {
 
  const navigate = useNavigate();
  // const notify = () => {
  //   toast('Login Completed!')
  // }

  const [userPass_login, setUserPass_login] = useState('')
  const [userMail_login, setUserMail_login] = useState('')
  const [loginStatus, setLoginStatus] = useState('')

 /* const login = () => {
    Axios.post("http://localhost:3001/fetch_userinfo", {
      userPass_login: userPass_login,
      userMail_login: userMail_login,
    }).then((response) => {
      if(response.data.message){
      console.log('failed');
      }
      else{
        console.log('success');
      }
    });
  }; */

  const button = () =>{
    // login()
    navigate("/")
  }
 
   return (
    <>
   
      <title>Login page</title>
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
                      Login to your account
                      </h4> 
                     <Form>
                     
                     <input 
                     type='email' 
                     placeholder= 'Email-address'
                     className='form-control my-3 p-3'
                     onChange={(e) => {
                      setUserMail_login(e.target.value);
                    }}
                     >
                       </input> 
                    
                     <input 
                     type='password' 
                     placeholder= 'password' 
                     className='form-control my-3 p-3'
                     onChange={(e) => {
                      setUserPass_login(e.target.value);
                    }}
                     >
                       </input> 
                    
                     <button 
                     type='button' 
                     className='login mt-3 mb-5'
                     onClick={button}
                     >
                       LOGIN
                       </button>
                       {/* if(Login completed)
                       toast.success("Login Completed");
                       else
                       toast.error("Something went wrong"); */}
                     <h1>{loginStatus}</h1>
                       
                       <p 
                style={{color:'#0abde3'}}>
                  Don't Have an Acount? 
                  </p> 
                     <a 
                     style={{color:'#54a0ff'}} 
                     href='#'
                     onClick={()=>{navigate("/SignUp");}}>
                       Sign Up First..
                      </a> 
               </Form> 

           </div>
          </div> 
       </div> 
      </body> 
 
     </> 
   )
 }

export default Login


