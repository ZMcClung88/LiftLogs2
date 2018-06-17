import React, { Component } from 'react';
import { View, Text, AsyncStorage, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import MyButton from '../components/myButton';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Menu extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Dashboard',
      tabBarIcon: () => {
        return <Icon name="favorite" size={30} />;
      },
      headerTintColor: 'royalblue',
      headerStyle: {
        backgroundColor: '#1e304f'
      }
    };
  };

  onButtonPress = () => {
    AsyncStorage.removeItem('fb_token', () => {
      this.props.navigation.navigate('welcome');
    });
  };

  onDashButtonPress(val) {
    this.props.navigation.navigate(val);
  }

  render() {
    return (
      <View style={styles.actionButtonContainer}>
        <View styles={styles.container}>
          <MyButton text="Add Employee" onPress={this.onDashButtonPress.bind(this, 'addEmp')} style={styles} />
          <MyButton text="Add Lift" onPress={this.onDashButtonPress.bind(this, 'addLift')} style={styles} />
          <Button title="Logout" backgroundColor="red" icon={{ name: 'delete-forever' }} onPress={this.onButtonPress} />
        </View>
        {/* <View>
        </View> */}
      </View>
    );
  }
}

const styles = {
  actionButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#596479'
  },
  myButtonContainer: {
    // flex: -1,
    height: 50,
    width: SCREEN_WIDTH * 0.9,
    minHeight: 75,
    minWidth: 75,
    borderRadius: 3,
    backgroundColor: '#1e304f',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  myButtonStyle: {
    color: '#F3D92D',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

export default Menu;
