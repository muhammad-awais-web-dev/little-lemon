import React from 'react'
import Styles from './BeforeFooter.module.css'

function BeforeFooter(props) {
  return (
    <section className={Styles.beforeFooter}>
      <h2>{props.heading}</h2>
      <p>{props.para1}</p>
      <h3>{props.subHeading}</h3>
      <p>{props.para2}</p>
    </section>
  )
}

export default BeforeFooter
