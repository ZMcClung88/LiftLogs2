import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return <Button title="Onwards!" raised buttonStyle={styles.buttonStyle} onPress={this.props.onComplete} />;
    }
  }
  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View key={slide.text} style={[styles.slideStyle, { backgroundColor: slide.backgroundColor }]}>
          <Text style={[styles.textStyle, { color: slide.color }]}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView horizontal style={{ flex: 1 }} pagingEnabled>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: '#F3D92D',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: '#F3D92D',
    marginTop: 15,
    width: 200,
    borderRadius: 3
  }
};

export default Slides;
