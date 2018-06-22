import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './common/CardSection';
import { Card } from './common/Card';
// import { Input } from './common';

class MyCheckBox extends Component {
  render() {
    return (
      <Card>
        <CardSection style={styles.cardSectionStyle}>
          <Text>{this.props.day}</Text>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  cardSectionStyle: {
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default MyCheckBox;
