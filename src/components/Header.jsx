import NavBar from './NavBar.jsx';
import Login from './Login.jsx';

export default function Header({cart}) {
	return (
    <div className="header">
		  LOGO<br/>
      <NavBar cart={cart} />
      <Login />
	  </div>
  );
}