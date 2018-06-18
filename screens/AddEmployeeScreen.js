import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EmployeeCreate from '../components/EmployeeCreate';

class AddEmployee extends Component {
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
