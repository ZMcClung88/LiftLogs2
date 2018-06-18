import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LiftCreate from '../components/LiftCreate';

class AddLift extends Component {
  state = {
    name: ''
  };

  render() {
    return (
      <View>
        <LiftCreate props={this.props} />
      </View>
    );
  }
}

export default AddLift;
