import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : styles.navLink
                }
              >
                Каталог
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to="/basket"
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : styles.navLink
                }
              >
                Корзина
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
