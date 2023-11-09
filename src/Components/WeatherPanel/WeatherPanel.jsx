import React from 'react'
import styles from "../WeatherPanel/WeatherPanel.module.css"
import Pronostico from "../Pronostico/Pronostico"
import {useSpring, config, animated} from "@react-spring/web"

function WeatherPanel({selector, clima, pronostico}) {

    const animPanel = useSpring({
        from: {opacity: 0, width: "20%"},
        to: {opacity : 1, width: "100%"},
        config: config.default
    })

  return (
    <animated.div className={styles.WeatherPanel} style={animPanel}>
        <div className={styles.TodayInfo}> 
            <div className={styles.resumenCont}>
                <img src={`https://openweathermap.org/img/w/${clima.weather[0].icon}.png`} alt="" />
                <div className={styles.resumenTemp}>
                    <div className={styles.temperatura}>{`${(parseInt(clima.main.temp) - 273.15).toFixed()}° C`}</div> 
                    <div className={styles.cielo}>{(clima.weather[0].description).toUpperCase()}</div>                                     
                </div>               
            </div>
            <div className={styles.contDetalle}>
                <div className={styles.ciudad}>{clima.name}</div>
                <div className={styles.pais}>{clima.sys.country}</div>
            </div>
            <div className={styles.contDetalle}>
                <div className={styles.minimoT}>Mínimo</div>
                <div className={styles.minimo}>{`${(parseInt(clima.main.temp_min) - 273.15).toFixed()}° C`}</div>
            </div>
            <div className={styles.contDetalle}>
                <div className={styles.maximoT}>Máximo</div>
                <div className={styles.maximo}>{`${(parseInt(clima.main.temp_max) - 273.15).toFixed()}° C`}</div>
            </div>
            <div className={styles.contDetalle}>
                <div className={styles.vientoT}>Viento</div>
                <div className={styles.viento}>{`${((clima.wind.speed) * 3.6).toFixed()} Km/h`}</div>
            </div>
            <div className={styles.contDetalle}>
                <div className={styles.humedadT}>Humedad</div>
                <div className={styles.humedad}>{`${(parseInt(clima.main.humidity)).toFixed()} %`}</div>
            </div>
            <div className={styles.botonCont}>
                <div className={styles.boton} onClick={() => selector("A")}>Back</div>
            </div>           
        </div>
        <div className={styles.ForecastInfo}>
            <div className={styles.contPronostico}>
                {pronostico.list.map((newP) => <Pronostico key={pronostico.list.indexOf(newP)} pron={newP}></Pronostico>)}
            </div>
        </div>
    </animated.div>
  )
}

export default WeatherPanel