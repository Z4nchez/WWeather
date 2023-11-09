import React from "react";
import { useState } from "react";
import styles from "../Panel/Panel.module.css";
import StartPanel from "../StartPanel/StartPanel"
import WeatherPanel from "../WeatherPanel/WeatherPanel"

function Panel() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [panelSelector, setPanelSelector] = useState("A")

  let urlWeather =
    "https://api.openweathermap.org/data/2.5/weather?appid=adbdd0caee6ef25d9fa05a4a8fe02232&lang=es";
  let urlCity = "&q=";

  let urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?appid=adbdd0caee6ef25d9fa05a4a8fe02232&lang=es";

  const findData = async (cty) => {

    urlWeather = urlWeather + urlCity + cty;

    await fetch(urlWeather)
      .then((response) => {
        if (!response.ok) throw response;
        return response.json();
      })
      .then((weatherData) => {
        setWeather(weatherData);
      })
      .catch((error) => {
        console.log(error);
      });

    urlForecast = urlForecast + urlCity + cty;

    await fetch(urlForecast)
      .then((response) => {
        if (!response.ok) throw response;
        return response.json();
      })
      .then((forecastData) => {
        setForecast(forecastData);
      })
      .catch((error) => {
        console.log(error);
      });

      setPanelSelector("B");
  };

  return (
    <div className={styles.Panel}>
      <div className={styles.Super}>
        <div className={styles.Panel2}>
            {panelSelector === "A" && <StartPanel></StartPanel>}
            {panelSelector === "B" && <WeatherPanel selector={setPanelSelector} clima={weather} pronostico={forecast}></WeatherPanel>}
        </div>
        <div className={styles.SearchCont}>
          <div className={styles.SearchModule}>
            <div className={styles.Data0}>
              <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                placeholder="Search"
              />
            </div>
            <div className={styles.Data1} onClick={() => findData(city)}>
              <img src="lupa.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
