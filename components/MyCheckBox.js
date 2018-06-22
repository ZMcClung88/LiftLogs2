import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CardSection } from './common/CardSection';
import { Card } from './common/Card';
// import { Input } from './common';

class MyCheckBox extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        {/* <Card> */}
        <CardSection style={this.props.style}>
          <Text style={styles.textStyle}>{this.props.day}</Text>
        </CardSection>
        {/* </Card> */}
      </TouchableOpacity>
    );
  }
}

const styles = {
  cardSectionStyle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: 'black',
    fontSize: 22,
    letterSpacing: 0.5
  }
};

export default MyCheckBox;
