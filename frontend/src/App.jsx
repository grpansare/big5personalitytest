import React from 'react'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
// In your App.js or index.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import AboutUs from './Pages/AboutUs';
import Footer from './Components/Footer';
import Signup from './Pages/Signup';
import './App.css'
import LoginPage from './Pages/LoginPage';
import ContactUs from './Pages/ContactUs';
import Homepage from './Pages/Homepage';
import ProfilePage from './Pages/ProfilePage';
import Question from './Components/Question';
import TestPage from './Pages/TestPage';
import Instructions from './Components/Instructions';
import ForgotPassword from './Pages/ForgetPassword';
import ResultPage from './Pages/ResultPage';
import PrivateRoute from './Components/PrivateRoute';
import ChangePassword from './Pages/ChangePassword';
import TestResult from './Pages/TestResults';


const App = () => {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Homepage/>}>
        <Route path='/' element={<Home/>}/>

       <Route path='/about' element={<AboutUs/>}/>
     
      
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/userprofile' element={<ProfilePage/>}/>
      {/* <Route path='/instructions' element={<Instructions/>}/> */}
      <Route path='/take-test' element={<TestPage/>}/>
      <Route path='/test-results' element={<TestResult/>}/>
      <Route path='/result' element={<ResultPage/>}/>
      </Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Login' element={<LoginPage/>}/>
      <Route path='/changepassword' element={<ChangePassword/>}/>
      <Route path='/forgetpassword' element={<ForgotPassword/>}/>
      <Route element={<PrivateRoute/>}>
     <Route path='/instructions' element={<Instructions/>}/>
     </Route>
    </Routes>
   
     
    </BrowserRouter>
  )
}

export default App
