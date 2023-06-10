import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const { header, menu, logo } = styles;

  return (
    <header className={header}>
      <p className={logo}>Brunchy</p>
      <div className={menu}>
        <a href="dreamshot.bg" target="_blank">
          About
        </a>
        <a href="dreamshot.bg" target="_blank">
          Call us
        </a>
      </div>
    </header>
  );
};

export default Header;
