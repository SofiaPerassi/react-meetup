import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {

  const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY > 100) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

  return (
    <header className={`${classes.navbar} ${show && classes.header}`}data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              All Meetups
            </Link>
          </li>
          <li>
            <Link to='/newmeetups'>
              New Meetup
            </Link>
          </li>
          <li>
            <Link to='/favorites'>
            My Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
