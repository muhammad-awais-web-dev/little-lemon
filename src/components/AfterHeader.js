import React from 'react'
import Styles from './AfterHeader.module.css'

function AfterHeader(props) {
  return (
    <section className={Styles.afterSection}>
        <h1> {props.title} </h1>
        <p><strong> {props.strong} </strong></p>
        <p> {props.para} </p>
    </section>
  )
}

export default AfterHeader
