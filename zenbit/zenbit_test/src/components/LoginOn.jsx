import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginOn = () => {
  const navigate = useNavigate();
  const goSignOut = () => {
    navigate('/login');
  }
  return (
    <div className='header'>
        <div className="btn">
          <button onClick={goSignOut} className="btn-login">Sign Out</button>
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

export default LoginOn