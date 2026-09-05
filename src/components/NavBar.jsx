import { useState } from 'react';

export default function NavBar() {
  const [light, setLight] = useState(true);
  const theme = light === true ? 'light' : 'dark';

  const handleThemeSwitch = () => {
    setLight(!light);
    document.body.className = light === true ? 'dark' : 'light';
  } 


return (
    <div className="navbar">
      <a className="logo">
        Lya e-Shop
      </a>
      <nav className="nav-wrapper">
        <button onClick={handleThemeSwitch} className="theme-switcher">
          <img
            src={`https://res.cloudinary.com/dbfn5lnvx/image/upload/v1732813039/react-tutorial/superm-v2/${theme}.svg`}
            width="24"
            height="24"
            alt={`${theme} theme`}
          />
        </button>
        <ul className="nav">
          <li className="nav-item">
            <a>Home</a>
          </li>
          <li className="nav-item">
            <a>Login</a>
          </li>
          <li className="nav-item">
            <a>Products</a>
          </li>
        </ul>
        <a className="btn btn-nav">
          Cart (0)
        </a>
      </nav>
    </div>
  );

}
