import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {Routes, Route} from "react-router-dom";
import AllBooks from './pages/AllBooks';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Bookdetails from './components/Bookdetails/Bookdetails';
const App = () => {
  return (
    <div>
      
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/all-books" element={<AllBooks/>}/>
          <Route path="/LogIn" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/book-details/:id" element= {<Bookdetails/>} />
        </Routes>
        <Footer/>
        
    </div>
  )
}

export default App