import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../contexts/AuthContext";

import styles from "./Navbar.module.css";

// Icons 
import homei from '../images/home.png'
import plusi from '../images/plus.png'
import dashboardi from '../images/dashboard.png'
import sairi from '../images/sair.png'
import infoi from '../images/info.png'
import useri from '../images/user.png'
import novoi from '../images/novo-usuario.png'

const home = homei
const plus = plusi
const dashboard = dashboardi
const sair = sairi
const info = infoi
const userIcon = useri
const novo = novoi


const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication()


  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <img className={styles.go} src={home} alt="" />
            
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <img className={styles.go} src={userIcon} alt="" />
              </NavLink>
              </li>
              <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <img className={styles.go} src={novo} alt="" />
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <img className={styles.go} src={plus} alt="" />
              </NavLink>
              </li>
              <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <img className={styles.go} src={dashboard} alt="" />
              </NavLink>
            </li>
         </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <img className={styles.go} src={info} alt="" />
          </NavLink>
        </li>
          {user && (
            <li>
              <button onClick={logout}><img className={styles.go} src={sair} alt="" /></button>
            </li>
          )}
      </ul>
    </nav>
  );
};

export default Navbar;
