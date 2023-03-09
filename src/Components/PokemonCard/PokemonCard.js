import React from 'react'
import style from "./PokemonCard.module.css"

export default function PokemonCard( { title, img, details } ) {

  return (
    <div className={style.content}>
        <div className={`${style.pokemonCard} my-5`}>
            <h1 className={`${style.text} mt-5`}> { title } </h1>
            <img src={ img } alt="" className={`${style.img} my-5`} />
            <h4 className={`${style.text} mb-5 mx-3`}> { details } </h4>
        </div>
    </div>
  )
}