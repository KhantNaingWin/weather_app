/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Clock from "react-clock";
import { useEffect, useState } from "react";
import "react-clock/dist/Clock.css";

const Card = ({ data }) => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (JSON.stringify(data) !== "{}") {
    return (
      <div className=" d-flex flex-column align-items-center gap-2">
        <Clock value={value} className="my-3" />
        <h2>{data.name} </h2>
        <h1>
          {" "}
          <img
            src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          />{" "}
          8°C
        </h1>
        <h4>{data.weather[0].main} </h4>
        <p>Humidity: {data.main.humidity} % </p>
        <p>Visibility: {data.visibility / 1000}km</p>
      </div>
    );
  } else {
    return <h1 className=" text-center">Loading...</h1>;
  }
};

export default Card;
