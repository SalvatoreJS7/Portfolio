import './App.css';
import './reset.css';
import React from 'react';
import Header from './components/Header.jsx';
import Deals from './components/Deals.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import LoginOn from './components/LoginOn.jsx';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={
          <>
            <Header />
            <Deals />
          </>
          } />
            
          <Route path='/login' element={<Login />}/> 
          <Route path='/register' element={<Register />}/>
          <Route path='/loginOn' element={
          <>
            <LoginOn /> 
            <Deals />
          </>} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
