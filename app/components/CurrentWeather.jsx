/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY_weather;

const CurrentWeather = () => {
  const [temperature, setTemperature] = useState(0);
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");

  const getWeather = async (lat, lon) => {
    try {
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      console.log(response);

      setTemperature(Math.floor(response.data.main.temp));
      setName(response.data.weather[0].main);
      setIcon(
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleGeoSucc = (position) => {
    const latitude = position.coords.latitude; // 경도
    const longitude = position.coords.longitude; // 위도

    getWeather(latitude, longitude);
  };

  const handleGeoErr = (err) => {
    console.log("geo err! " + err);
  };

  const requestCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
  };

  useEffect(() => {
    requestCoords();
  }, [requestCoords]);

  return (
    <div id="weatherWrap">
      <img alt={name} src={icon} />
      <p>
        {temperature}&#176;C {name}
      </p>
    </div>
  );
};

export default CurrentWeather;
