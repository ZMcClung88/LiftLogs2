import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EmployeeCreate from '../components/EmployeeCreate';

class AddEmployee extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Add Employee',
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
    firstName: '',
    lastName: '',
    phone: ''
  };
  render() {
    return (
      <View>
        <EmployeeCreate props={this.props} />
      </View>
    );
  }
}

export default AddEmployee;
