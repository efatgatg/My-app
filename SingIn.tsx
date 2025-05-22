import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика для регистрации пользователя
    console.log('Регистрация:', email, 'Пароль:', password, 'Подтверждение пароля:', confirmPassword);
    // Добавить проверку совпадения паролей
  };

  return (
   <div className='b'>
     <div className='signst'>
      <h2>Регистрация</h2>
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
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '.5rem' }}>Подтвердите пароль:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '.5rem' }}
          />
        </div>
        <button type="submit" style={{ padding: '.75rem 1.5rem', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>
          Зарегистрироваться
        </button>
      </form>
      <p style={{ marginTop: '1rem' }}>
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </p>
    </div>
   </div>
  );
};

export default SingIn;
