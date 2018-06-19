import _ from 'lodash';
import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image, ScrollView } from 'react-native';
import { fetchWeather } from '../actions/weather_actions';
import { CardSection, Card } from './common';

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

  renderWeather = () => {
    // console.log('weather props', _.map(this.props.list, obj => obj.weather[0].description));
    return _.map(this.props.list, obj => {
      const imageArr = obj.weather.map(item => item.icon);
      const img = imageArr[0] + '.png';
      const imgURL = '../assets/weather-icons/' + img;

      return (
        <ScrollView key={obj.dt}>
          <Card>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 5 }}>
              <View>
                <Text>high: {_.round(9 / 5 * (obj.main.temp_max - 273) + 32)}&#176;F</Text>
                <Text>low: {_.round(9 / 5 * (obj.main.temp_min - 273) + 32)}&#176;F</Text>
              </View>
              <View>
                <Image source={require('../assets/weather-icons/01d.png')} style={{ height: 50, width: 50 }} />
                <Text>{obj.weather.map(item => item.description)}</Text>
              </View>
            </View>
          </Card>
        </ScrollView>
      );
    });
  };

  render() {
    // const data = weatherData;
    const tempData = _.map(this.props.list, obj => obj.main);
    // const temps = _.map(tempData, obj => obj.temp);
    const temps = _.map(tempData, obj => _.round(9 / 5 * (obj.temp - 273) + 32));
    const temp_high = _.map(tempData, obj => _.round(9 / 5 * (obj.temp_max - 273) + 32));
    const temp_low = _.map(tempData, obj => _.round(9 / 5 * (obj.temp_min - 273) + 32));
    // console.log('temp_high', temp_low);
    // console.log('temp', displayTemp);

    return (
      <View style={{ marginBottom: 50 }}>
        <Text>Today's Weather</Text>
        {/* <Text>{temps}</Text>
        <Text>{temp_high}</Text>
        <Text>{temp_low}</Text> */}
        {this.renderWeather()}
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
