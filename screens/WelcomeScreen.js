import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Lift Logs', backgroundColor: '#1e304f', color: '#F3D92D' },
  { text: 'Manage employees', backgroundColor: '#F3D92D', color: '#1e304f' },
  { text: 'Set Schedules', backgroundColor: '#1e304f', color: '#F3D92D' },
  { text: 'Daily Overviews', backgroundColor: '#F3D92D', color: '#1e304f' }
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
