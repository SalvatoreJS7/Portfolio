import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  }
  const goToRegister = () => {
    navigate('/register');
  }
  return (
    <div className='header'>
        <div className="btn">
          <button onClick={goToLogin} className="btn-login">Log In</button>
          <button onClick={goToRegister} className="btn-register">Sign Up</button>
        </div>
        <div className="header_title">
          <h1 className="title">The chemical  negatively charged</h1>
          <p3 className="title-text">Numerous calculations predict, and experiments confirm, 
          that the force field reflects the beam, while the mass defect is not formed. 
          The chemical compound is negatively charged. Twhile the mass defect is </p3>
          <div className="title_">
            <a href='#deal' className="title-btn">Get Started</a>
          </div>
        </div>
    </div>
  )
}

export default Header
