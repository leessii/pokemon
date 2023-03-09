import React from 'react'
import style from "./Header.module.css"
import logo from "../../images/pokemon-logo.png";


export default function Header() {
  return (
    <header className={ style.header }>
        <img src={logo} className={ style.img } alt="logo" />
        <h1 className="text-center">@Gotta Catch<span className="text-danger">'Em All!</span></h1>
    </header>
  )
}

