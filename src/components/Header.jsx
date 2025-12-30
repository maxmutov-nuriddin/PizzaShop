import { useState } from "react";

const Header = ({cartCount}) => {
  const [navActive, setNavActive] = useState(false);

  return (
    <header className="header container">
      <a className="header__logo-link" href="#">
        <img className="header__logo-img" src="./img/header-img/pizzashop.svg" alt="logo" />
      </a>

      <nav className={`header__nav ${navActive ? "active" : ""}`}>
        <ul className="header__menu">
          <li className="header__menu-item"><a className="header__menu-link" href="#hero">Home</a></li>
          <li className="header__menu-item"><a className="header__menu-link" href="#menu">Menu</a></li>
          <li className="header__menu-item"><a className="header__menu-link" href="#events">Events</a></li>
          <li className="header__menu-item"><a className="header__menu-link" href="#about">About us</a></li>
        </ul>

        <ul className="header__actions">
          <li className="header__actions-item">
            <button className="header__login-btn">Log in</button>
          </li>
          <li className="header__actions-item">
            <button className="header__cart-btn">
              {cartCount > 0 && <span className="header__cart-count">{cartCount}</span>}
              <img className="header__cart-img" src="./img/header-img/nav-buy.svg" alt="buy button" />
            </button>
          </li>
        </ul>
      </nav>

      <button className="header__burger-btn" onClick={() => setNavActive(!navActive)}>
        <img className="header__cart-img" src="./img/header-img/burger-btn.svg" alt="burger button" />
      </button>
    </header>
  );
}

export default Header;
