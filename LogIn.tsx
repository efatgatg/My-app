// import React from 'react';

// const signin: React.FC = () => {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>About Us</h1>
//       <p>
//         This is a simple React application demonstrating routing using React Router DOM.
//         Here you can find more information about our project, team, and goals.
//       </p>
//     </div>
//   );
// };

// export default signin;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика для входа пользователя
    console.log('Логин:', email, 'Пароль:', password);
  };

  return (
    <div className="b">
      <div  className='logst'>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '.5rem' }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '.5rem' }}>Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '.5rem' }}
          />
        </div>
        <button type="submit" style={{ padding: '.75rem 1.5rem', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Войти
        </button>
      </form>
      <p style={{ marginTop: '1rem' }}>
        Еще нет аккаунта? <Link to="/signin">Зарегистрироваться</Link>
      </p>
    </div>
    </div>
  );
};

export default LogIn;

