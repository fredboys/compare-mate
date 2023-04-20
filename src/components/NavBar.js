import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from '../assets/comparemate-logo.png'
import styles from '../styles/NavBar.module.css'
import {NavLink} from 'react-router-dom'
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext'
import Avatar from './Avatar'
import axios from 'axios'
import useClickOutsideToggle from '../hooks/useClickOutsideToggle'
import { removeTokenTimestamp } from '../utils/utils'

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const {expanded, setExpanded, ref} = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
            await axios.post('dj-rest-auth/logout/');
            setCurrentUser(null);
            removeTokenTimestamp()
        } catch(err) {
            // console.log(err);
        }
    };

    const addPostIcon = (
        <NavLink 
            className={`${styles.NavLink} ${styles.Hide}`} 
            activeClassName={styles.Active} 
            to="/products/create"
        >
            <i className='fas fa-plus-square'></i>Add
        </NavLink>    
    )
    const loggedInIcons = <>
        <NavLink 
            className={`${styles.NavLink} ${styles.Appear}`} 
            activeClassName={styles.Active} 
            to="/products/create"
        >
            <i className='fas fa-plus-square'></i>Add
        </NavLink>
        <NavLink 
            className={styles.NavLink} 
            activeClassName={styles.Active} 
            to="/feed"
        >
            <i className='fas fa-stream'></i>Feed
        </NavLink>
        <NavLink 
            className={styles.NavLink} 
            activeClassName={styles.Active} 
            to="/favourite"
        >
            <i className='fa-solid fa-bookmark'></i>Favourite
        </NavLink>
        <NavLink 
            className={styles.NavLink} 
            to="/"
            onClick={handleSignOut}
        >
            <i className='fas fa-sign-out-alt'></i>Sign out
        </NavLink>
        <NavLink 
            className={styles.NavLink} 
            to={`/profiles/${currentUser?.profile_id}`}
        >
            <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
        </NavLink>
    </>;
    const loggedOutIcons = (
        <> 
            <NavLink 
                className={styles.NavLink} 
                activeClassName={styles.Active} 
                to="/signin"
            >
                <i className='fas fa-sign-in-alt'></i>Sign in
            </NavLink>
            <NavLink
                className={styles.NavLink} 
                activeClassName={styles.Active} 
                to="/signup"
            >
                <i className='fas fa-user-plus'></i>Sign up
            </NavLink>
        </>
    )

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="lg" fixed="top">
        <Container>
            <NavLink to="/">
                <Navbar.Brand>
                    <img src={logo} alt='logo' height="50" />
                </Navbar.Brand>
            </NavLink>
            {currentUser && addPostIcon}
            <Navbar.Toggle
                ref={ref}
                onClick={() => setExpanded(!expanded)} 
                aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <NavLink 
                    exact
                    className={styles.NavLink} 
                    activeClassName={styles.Active} 
                    to="/"
                >
                    <i className='fas fa-home'></i>Home
                </NavLink>
                {currentUser ? loggedInIcons : loggedOutIcons}
                </Nav>

            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar