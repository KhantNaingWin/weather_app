import axios from "axios"


export const api=axios.create({
    baseURL : "https://api.openweathermap.org/data/2.5"
})

export const api_key=`710b93a60eaed67c2fb86b799ae042a4` 