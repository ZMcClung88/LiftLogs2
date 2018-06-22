import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CardSection } from './common/CardSection';
import { Card } from './common/Card';
// import { Input } from './common';

class MyCheckBox extends Component {
  state = {
    color: 'white'
  };

  toggleColor = () => {
    console.log('button state', this.state);
    let color =
      this.state.color === 'white'
        ? 'green'
        : this.state.color === 'green' ? 'red' : this.state.color === 'red' ? 'green' : null;

    this.setState({ color: color });
  };

  render() {
    return (
      <TouchableOpacity onPress={this.toggleColor}>
        {/* <Card> */}
        <CardSection
          style={{
            backgroundColor: this.state.color,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3,
            marginTop: 10
          }}
        >
          <Text>{this.props.day}</Text>
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
  }
};

export default MyCheckBox;
