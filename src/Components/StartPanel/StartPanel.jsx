import React from 'react'
import styles from "../StartPanel/StartPanel.module.css"
import {useSpring, config, animated} from "@react-spring/web"

function StartPanel() {

  const animPanel = useSpring({
    from: {opacity: 0, width: "20%"},
    to: {opacity : 1, width: "100%"},
    config: config.default
})

  return (
    <animated.div className={styles.StartPanel} style={animPanel}>
        <img src="nubes2.svg" alt="" />
        <h2 className={styles.intro}>Consulta el clima y el pronóstico para los próximos días.</h2>
    </animated.div>
  )
}

export default StartPanel