import React, { Component } from 'react';
import { View, Text, AsyncStorage, Dimensions } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import EmployeeForm from '../components/EmployeeForm';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class AddEmployee extends Component {
  state = {
    firstName: '',
    lastName: '',
    phone: ''
  };

  onButtonPress = () => {};

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>First Name</FormLabel>
        <FormInput onPress={this.onButtonPress} />
        <FormLabel>Last Name</FormLabel>
        <FormInput onPress={this.onButtonPress} />
        <FormLabel>Phone</FormLabel>
        <FormInput onPress={this.onButtonPress} />
        <View style={styles.buttonContainer}>
          <Button title="Submit" backgroundColor="red" />
        </View>
        <EmployeeForm />
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
