/* eslint-disable react-hooks/exhaustive-deps */
import Card from "./components/Card";
import Form from "./components/Form";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { api,api_key } from "./components/api/api";
import { useEffect, useState } from "react";


function App() {



  const[data,setData]=useState({})
  const[country,setCountry]=useState('Yangon')
  

  const fetchWeather= async (country_name)=>{
    // console.log(country_name);
    if(country_name !== undefined){
     setCountry(country_name)
    }
    try {
      const res=await api.get(`/weather?q=${country}&appid=${api_key}`)
    setData(res.data)
    } catch (error) {
      console.log('Error...');
    }
    

  }
      useEffect(()=>{
        fetchWeather();
      },[country])

  return (
    <div className="w-full min-vh-100 d-flex justify-content-center align-items-center">
      <div className=" shadow-lg bg-light gap-4">
        <h2 className=" text-center mt-4">Weather App</h2>
        <Form fetchWeather={fetchWeather}/>
        <Card data={data}/>
      </div>
    </div>
  );
}

export default App;
