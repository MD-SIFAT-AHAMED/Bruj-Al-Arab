import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Book from './Components/Book/Book';
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/home' element={<Home/> }/>
            <Route path='/login' element={<Login/> }/>
            <Route path='/book/:bedType' element={<Book/>}/>
            <Route exact path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;