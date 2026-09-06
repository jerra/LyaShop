import NavBar from './NavBar.jsx';

export default function Header({cart}) {
	return (
    <div className="header">
		  LOGO<br/>
      <NavBar cart={cart} />
	  </div>
  );
}