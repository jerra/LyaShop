import { useState } from 'react';

export default function NavBar() {
  const [light, setLight] = useState(true);
  const body = document.body;

  const handleThemeSwitch = () => {
    const nextTheme = setLight(light === true ? 'dark' : 'light');
    body.classList.replace()
  } 


  return(
    <nav className="navbar">
      NAVBAR
    </nav>
  );

}
