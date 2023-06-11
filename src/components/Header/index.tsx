import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const { header, menu, logo } = styles;

  return (
    <header className={header}>
      <p className={logo}>Brunchy</p>
      <div className={menu}>
        <a href="https://www.dreamshot.bg/" target="_blank" rel="noreferrer">
          About
        </a>
        <a href="https://www.dreamshot.bg/" target="_blank" rel="noreferrer">
          Call us
        </a>
      </div>
    </header>
  );
};

export default Header;
