import React from 'react'
import styles from "../Pronostico/Pronostico.module.css"
import {useSpring, config, animated} from "@react-spring/web"

function Pronostico({pron}) {

    const animPanel = useSpring({
        from: {opacity: 0, width: "20%"},
        to: {opacity : 1, width: "100%"},
        config: config.default
    })
  
  const Dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

  const dataF = new Date(pron.dt_txt)
  const nDay = dataF.getDay()

  return (
    <animated.div className={styles.Pronostico} style={animPanel}>
        <div className={styles.dateCont}>
            <div className={styles.dia}>{Dias[nDay]}</div>
            <div className={styles.hora}>{`${dataF.getHours()}:00 hs.`}</div>
        </div>
        <div className={styles.detalles}>
            <div className={styles.detalleItem}>{`${(parseInt(pron.main.temp) - 273.15).toFixed()}° C`}</div>
            <img src={`https://openweathermap.org/img/w/${pron.weather[0].icon}.png`} alt="" />
            <div className={styles.detalleItem}>{`${((pron.wind.speed) * 3.6).toFixed()} Km/h`}</div>
            <div className={styles.detalleItem}>{`${(parseInt(pron.main.humidity)).toFixed()} %`}</div>
        </div>
    </animated.div>
  )
}

export default Pronostico