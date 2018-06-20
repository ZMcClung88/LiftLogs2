import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import MyButton from '../components/myButton';
import Weather from '../components/Weather';
import CardSection from '../components/common';
import Card from '../components/common';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class AnouncementScreen extends Component {
  state = { notes: '', hide: true };

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Announcements',
      tabBarIcon: () => {
        return <Icon name="favorite" size={30} />;
      },
      headerTintColor: 'royalblue',
      headerStyle: {
        backgroundColor: '#1e304f'
      }
    };
  };

  onChangeText = value => {
    this.setState({ notes: value });
    // console.log('value', this.state.notes);
  };

  onButtonPress = () => {
    this.setState({ hide: !this.state.hide });
  };

  renderNotes = () => {
    if (this.state.hide) {
      return (
        <ScrollView>
          <Text style={{ fontStyle: 'italic' }}>Today's Notes:</Text>
          <TextInput
            // style={{ display: this.state.isHidden ? 'none' : null }}
            onChangeText={this.onChangeText}
            value={this.state.notes}
            multiline
            autoCorrect
            autoFocus
            style={styles.textInputStyle}
            editable={true}
            maxLength={250}
          />
          <MyButton text="Done" style={styles} onPress={this.onButtonPress} />
          <View>
            {/* <Text>Weather:</Text> */}
            <Weather />
          </View>
        </ScrollView>
      );
    } else {
      return (
        <View style={{ height: SCREEN_HEIGHT, width: SCREEN_WIDTH * 0.9 }}>
          <Text style={{ fontSize: 22 }}>{this.state.notes}</Text>
          <MyButton text="Edit" style={styles} onPress={this.onButtonPress} />
          <View>
            {/* <Text>Weather:</Text> */}
            <Weather />
          </View>
        </View>
      );
    }
  };

  render() {
    return (
      <ScrollView
        style={{
          flexDirection: 'column',
          height: SCREEN_HEIGHT,
          padding: 20,
          backgroundColor: '#596479'
        }}
      >
        {this.renderNotes()}
      </ScrollView>
    );
  }
}
const styles = {
  textInputStyle: {
    height: 175,
    width: SCREEN_WIDTH * 0.9,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 15,
    fontSize: 18,
    borderRadius: 5,
    marginTop: 10
  },
  myButtonContainer: {
    // flex: 1,
    height: 50,
    width: SCREEN_WIDTH * 0.9,
    borderRadius: 3,
    backgroundColor: '#1e304f',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 25
  },
  myButtonStyle: {
    color: '#F3D92D',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};
export default AnouncementScreen;
