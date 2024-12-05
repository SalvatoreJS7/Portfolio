import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  }
  const goToRegister = () => {
    navigate('/register');
  }

  const signIn = async () => {
    const loginData = { email, password };

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);

        // Сохраняем идентификатор пользователя или токен в localStorage (если нужен)
        localStorage.setItem('userId', result.userId);
        setLogin(true);
        console.log(login);

        setLoginMessage('Login successful');
        
        // Перенаправление на домашнюю страницу после успешного входа
        navigate('/loginOn');
      } else {
        const errorData = await response.json();
        console.error('Ошибка при входе:', errorData.error);
        setLoginMessage('Invalid email or password');
      }
    } catch (error) {
      console.error('Ошибка при подключении к серверу:', error);
      setLoginMessage('Ошибка сервера');
    }
  };

  return (
    <div className='login_container'>
      <div className="header_login">
        <button onClick={goToHome} className="btn-login">Home page</button>
      </div>
      <div className="login_list">
        <img src={require("./img/login.png")} alt="" className="login-img" />
        <div className="form_list">
            <h1 className="form-title">Login</h1>
            <div className="form_email">
                <h3 className="form_email_title">Email</h3>
                <input type="text" className="input_email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form_email">
                <h3 className="form_email_title">Password</h3>
                <input type="password" className="input_email" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="forgot_link">
                <a href="#" className="forgot_password">Forgot password?</a>
            </div>
            <button onClick={signIn} className="btn_sign_in">Sign In</button>
            <div className="register">
                <p3 className="register_text">Don’t have account? <a onClick={goToRegister} href="" className="register_link">Sign Up</a></p3>
            </div>
            
            
        </div>
      </div>
            <div className="login_message">
              {loginMessage && <p className="login_message">{loginMessage}</p>}
            </div>
    </div>
  )
}

export default Login

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginMessage, setLoginMessage] = useState('');
  
//   const navigate = useNavigate();
  
//   const goToHome = () => {
//     navigate('/');
//   };

//   const goToRegister = () => {
//     navigate('/register');
//   };

//   const handleLogin = async () => {
//     const loginData = { email, password };

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log(result.message);

//         // Сохраняем идентификатор пользователя или токен в localStorage (если нужен)
//         localStorage.setItem('userId', result.userId);

//         setLoginMessage('Login successful');
        
//         // Перенаправление на домашнюю страницу после успешного входа
//         navigate('/');
//       } else {
//         const errorData = await response.json();
//         console.error('Ошибка при входе:', errorData.error);
//         setLoginMessage('Invalid email or password');
//       }
//     } catch (error) {
//       console.error('Ошибка при подключении к серверу:', error);
//       setLoginMessage('Ошибка сервера');
//     }
//   };

//   return (
//     <div className='login_container'>
//       <div className="header_login">
//         <button onClick={goToHome} className="btn-login">Home page</button>
//       </div>
//       <div className="login_list">
//         <img src={require("./img/login.png")} alt="" className="login-img" />
//         <div className="form_list">
//             <h1 className="form-title">Login</h1>
//             <div className="form_email">
//                 <h3 className="form_email_title">Email</h3>
//                 <input 
//                   type="text" 
//                   className="input_email" 
//                   placeholder='Email' 
//                   value={email} 
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//             </div>
//             <div className="form_email">
//                 <h3 className="form_email_title">Password</h3>
//                 <input 
//                   type="password" 
//                   className="input_email" 
//                   placeholder='Password' 
//                   value={password} 
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//             </div>
//             <div className="forgot_link">
//                 <a href="#" className="forgot_password">Forgot password?</a>
//             </div>
//             <button onClick={handleLogin} className="btn_sign_in">Sign In</button>
//             <div className="register">
//                 <p className="register_text">Don’t have an account? <a onClick={goToRegister} href="" className="register_link">Sign Up</a></p>
//             </div>
//             {loginMessage && <p className="login_message">{loginMessage}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
