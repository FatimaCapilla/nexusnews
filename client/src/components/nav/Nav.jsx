import './Nav.css'
import logo from '../../assets/logo-nexus-news.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  const token = localStorage.getItem('token')

  if (token) return (
    <nav>
      <div className='nav'>
        <Link to="/index" className='logo-container'>
          <img src={logo} alt="Nexus News logo" className='logo' />
        </Link>
      </div>
    </nav>
  )
  else {
    return (
      <nav>
        <div className='nav'>
          <Link to="/" className='logo-container'>
            <img src={logo} alt="Nexus News logo" className='logo' />
          </Link>
        </div>
      </nav>
    )
  }
}

export default Nav;