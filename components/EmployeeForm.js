import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection } from './common/CardSection';
import { Input } from './common';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection style={{ height: 40, backgroundColor: 'white' }}>
          <Input
            label="First Name"
            placeholder="Jane"
            value={this.props.firstName}
            onChangeText={value => this.props.employeeUpdate({ prop: 'firstName', value })}
          />
        </CardSection>

        <CardSection style={{ height: 40, backgroundColor: 'white' }}>
          <Input
            label="Last Name"
            placeholder="Johnson"
            value={this.props.lastName}
            onChangeText={value => this.props.employeeUpdate({ prop: 'lastName', value })}
          />
        </CardSection>

        <CardSection style={{ height: 40, backgroundColor: 'white' }}>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 24,
    paddingLeft: 15,
    color: '#F3D92D'
  },
  phoneStyle: {
    color: '#1e304f',
    fontWeight: 'bold',
    paddingLeft: 25
  },
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderColor: '#ddd',
    position: 'relative'
  }
};

const mapStateToProps = state => {
  console.log('state', state);
  const { firstName, lastName, phone } = state.employeeForm;

  return { firstName, lastName, phone };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
