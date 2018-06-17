import _ from 'lodash';
import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { fetchWeather } from '../actions/weather_actions';

const API_KEY = 'f9b3c4e0067e9d150a154256de430243';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// same as ^^^^ const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY

//Solitude coordinates
const LAT = 40.619763;
const LON = -111.591896;

const url = `${ROOT_URL}&lat=${LAT}&lon=${LON}&cnt=5`;

class Weather extends Component {
  state = {
    weather: []
  };

  componentWillMount() {
    this.props.fetchWeather();
    // console.log('please log');
    // axios.get(url).then(response => {
    //   this.setState({ weather: response.data });
    // });
  }

  render() {
    // const data = weatherData;
    // const tempData = _.map(this.props.list, obj => obj.tempData);
    // const temps = _.map(tempData, obj => obj.temp);
    // const displayTemp = _.map(temps, temp => _.round(9 / 5 * (temp - 273) + 32));
    // console.log('temp', displayTemp);

    return (
      <View>
        <Text>Today's Weather</Text>
        {/* <Text>{temp}</Text> */}
        {/* <Text>{highTemp}</Text> */}
        {/* <Text>Current: {_.round(9 / 5 * (temps - 273) + 32)} &deg;F</Text> */}
        {/* <Text>Max Temp: {_.round(9 / 5 * (data.temp_max - 273) + 32)} &deg;F</Text>
        <Text>Min Temp: {_.round(9 / 5 * (data.temp_min - 273) + 32)} &deg;F</Text> */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  // console.log('state', state.weather);
  const weatherData = state.weather;
  return weatherData;
};

export default connect(mapStateToProps, { fetchWeather })(Weather);
