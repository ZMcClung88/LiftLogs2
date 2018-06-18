import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LiftCreate from '../components/LiftCreate';

class AddLift extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Add Lift',
      tabBarIcon: () => {
        return <Icon name="favorite" size={30} />;
      },
      headerTintColor: 'royalblue',
      headerStyle: {
        backgroundColor: '#1e304f'
      }
    };
  };

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
