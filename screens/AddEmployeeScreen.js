import React, { Component } from 'react';
import { View, Text, AsyncStorage, Dimensions } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeCreate from '../components/EmployeeCreate';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class AddEmployee extends Component {
  state = {
    firstName: '',
    lastName: '',
    phone: '',
    shift: ''
  };

  onButtonPress = () => {};

  render() {
    return (
      <View style={styles.container}>
        <EmployeeCreate props={this.props} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 50
    // justifyContent: 'center'
  },
  buttonContainer: {
    paddingTop: 50
  }
};

export default AddEmployee;
