import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {

  const [show, setShow] = useState(true)

  let lastScroll = 0

  const controlNavbar = () => {
    if (window.scrollY >= lastScroll ) {
      setShow(false)
    }else{
      setShow(true)
    }
    lastScroll = window.scrollY;
  }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

  const favorites = useSelector((state) => state.meetupsFavorites)

  if(show){
    return (
      <header className={classes.header}data-test="navigation-header">
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
              <span className={classes.badge}>{favorites.length}</span>
            </li>
          </ul>
        </nav>
      </header>
    )
  } else {
    return(
      <div></div>
    )
  }
}
