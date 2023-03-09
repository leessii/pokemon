import React from 'react';
import style from "./Footer.module.css"
import pokemonImg from "../../images/pokemon.png";

export default function Footer() {
  return (
    <footer className={style.footer}>
        <p className="copyright">@Gotta Catch 'Em All!</p>
        <img src={pokemonImg} className="pokemonImg" alt="pokemonImg" />
    </footer>
  )
}
