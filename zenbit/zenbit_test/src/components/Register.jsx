import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [registerMessage, setRegisterMessage] = useState(''); 

  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  }

  const submit = async () => {
    const userData = { name, email, password, phone };

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        // navigate('/'); // Переход на главную страницу после успешной регистрации
        setRegisterMessage('Registration successful');
        setName('');
        setEmail('');
        setPassword('');
        setPhone('');

      } else {
        const errorData = await response.json();
        console.error('Ошибка при регистрации:', errorData.error);
        setRegisterMessage('Empty fields');
      }
    } catch (error) {
      console.error('Ошибка при подключении к серверу:', error);
    }
  };

  return (
    <div className='login_container'>
      <div className="header_login">
        <button onClick={goToHome} className="btn-login">Home page</button>
      </div>
      <div className="login_list register_list">
        
        <div className="form_list">
            <h1 className="form-title">Registration</h1>
            <div className="form_email">
                <h3 className="form_email_title">Name</h3>
                <input type="text" className="input_email" placeholder='Anatoliy' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form_email">
                <h3 className="form_email_title">Email</h3>
                <input type="text" className="input_email" placeholder='anatoliy@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form_email">
                <h3 className="form_email_title">Password</h3>
                <input type="password" className="input_email" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="form_email form_phone">
                <h3 className="form_email_title">Phone</h3>
                <input type="text" className="input_email" placeholder='+380968022309' value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
            
            <button onClick ={submit} className="btn_sign_in">Submit</button>

           
        </div>
        
      </div>

      <div className="register_message">
              {registerMessage === 'Registration successful' ? (<h3 className="register_message_text">{registerMessage}</h3>) : <h3 className="register_empty">{registerMessage}</h3>}
              {registerMessage === 'Registration successful' ? (<a href='/login' className='login_after_registration'>Log In</a>) : ('')}
      </div>
            
    </div>
  )
}

export default Register

