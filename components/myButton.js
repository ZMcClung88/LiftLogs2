import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class MyButton extends Component {
  render() {
    console.log('button props', this.props);
    const { myButtonStyle, myButtonContainer } = this.props.style;

    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={myButtonContainer}>
          <Text style={myButtonStyle}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default MyButton;
