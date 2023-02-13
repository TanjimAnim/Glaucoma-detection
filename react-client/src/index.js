import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './pages/Home';
import Login from './components/Login_signUp/Login';
import SignUp from './components/Login_signUp/SignUp';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home />} /> 
      {/* <Route path='/' element={<Login/>} /> */}
      {/* <Route path='/SignUp' element={<SignUp/>} /> */}
           <Route path='/home' element={<Home />} /> 
          <Route path='/app' element={<App/>} />
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
