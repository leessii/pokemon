import React from 'react'
import style from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={style.content}>
        <span className={style.loader}></span>
    </div>
  )
}

export default Loader