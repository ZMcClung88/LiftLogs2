import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card } from '../components/common';
import { CardSection } from '../components/common';

class Employee extends Component {
  render() {
    return (
      <CardSection>
        <Card>
          <Text>{firstName}</Text>
        </Card>
      </CardSection>
    );
  }
}

export default Employee;
