import axios from 'axios';
import { FETCH_WEATHER } from './types';

const API_KEY = 'f9b3c4e0067e9d150a154256de430243';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// same as ^^^^ const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY

//Solitude coordinates
const LAT = 40.619763;
const LON = -111.591896;

export const fetchWeather = () => async dispatch => {
  // console.log(LAT, LON);
  try {
    const url = `${ROOT_URL}&lat=${LAT}&lon=${LON}&cnt=10`;
    let { data } = await axios.get(url);
    dispatch({ type: FETCH_WEATHER, payload: data });
    // console.log('request', data.list);
  } catch (err) {
    console.log('err', err);
  }

  // return {
  //   type: FETCH_WEATHER,
  //   // We are returning the promise as the payload
  //   payload: request
  // };
};
