import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SingIn';
import Login from './pages/LogIn';
import './App.css';

function App() {
  return (
    <>
    <div>
<header className="navbar">
  <div className="logo">🔥 Torch</div>
  <div className='nav-elements'> 
    <nav className="nav-links">
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/about" style={{ marginRight: 10 }}>About</Link>
        <Link to="/contact">Contact</Link>
        
    </nav>
    <div className="nav-buttons">
    <Link className='sign-in' to="/signin">SingIn</Link>
    <Link className='login' to="/login">LogIn</Link>
    </div>
  </div>
</header>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
