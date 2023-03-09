import React from 'react'
import style from "./PokemonCard.module.css"

export default function PokemonCard( { title, img, details } ) {

  return (
    <div className={style.content}>
        <div className={`${style.pokemonCard} my-5`}>
            <h1 className={`${style.text} my-5 mb-3`}> { title } </h1>
            <img src={ img } alt="" className={`${style.img}`} />
            <h4 className={`${style.text} mt-3 my-5 mx-5`}> { details } </h4>
        </div>
    </div>
  )
}