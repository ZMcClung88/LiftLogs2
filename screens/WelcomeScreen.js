import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Lift Logs', backgroundColor: '#1e304f', color: '#F3D92D' },
  { text: 'Keep track of employees', backgroundColor: '#F3D92D', color: '#1e304f' },
  { text: 'View Schedules', backgroundColor: '#1e304f', color: '#F3D92D' }
];

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  };

  render() {
    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}

export default WelcomeScreen;
