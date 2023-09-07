import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import { githubLogo, logo } from "../../assets/images"

const Header = () => {
    return ( // Add the return statement here
        <header className="header" id="header">
            <Link className="header__Link" to="/">
                <img src={logo} alt="" className="Link__img" />
            </Link>
            <ul className="header__nav">
                <li className="nav__item">
                    <Link className="item__Link" to="/docs">Docs</Link>
                </li>
            </ul>
            <div className="header__auth">
                <a className="auth__Link" href="https://github.com/MysticalMike60t/Infoobly-UI">
                    <img src={githubLogo} alt="Github" />
                </a>
                <button className="auth__button login">Login</button>
                <button className="auth__button register">Register</button>
            </div>
        </header>
    );
}

const Layout = () => {
  return (
    <div className="container">
        <Header />
        <Outlet />
    </div>
  )
}

export { Layout }
