import React, { Component } from 'react';
import { View, Text, Image, Dimensions, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import MyButton from '../components/myButton';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class DashScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Dashboard',
      tabBarIcon: () => {
        return <Icon name="favorite" size={30} />;
      },
      headerTintColor: 'royalblue',
      headerStyle: {
        backgroundColor: '#1e304f'
      },
      headerLeft: (
        <Button
          title="Menu"
          onPress={() => navigation.navigate('menu')}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0,122,255,1)"
        />
      )
    };
  };

  onDashButtonPress(val) {
    this.props.navigation.navigate(val);
  }

  render() {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.buttonGroup}>
          {/* <Button
            buttonStyle={styles.groupButtonStyle}
            large
            title="Schedule"
            titleStyle={{ fontWeight: 900 }}
            color="#1e304f"
          />
          <Button
            buttonStyle={styles.groupButtonStyle}
            large
            title="Notes"
            titleStyle={{ fontWeight: 900 }}
            color="#1e304f"
          /> */}
          <MyButton text="Today" onPress={this.onDashButtonPress.bind(this, 'sched')} style={styles} />
          <MyButton text="Notes" onPress={this.onDashButtonPress.bind(this, 'notes')} style={styles} />
          <MyButton text="Employees" onPress={this.onDashButtonPress.bind(this, 'empList')} style={styles} />
          <MyButton text="Lifts" onPress={this.onDashButtonPress.bind(this, 'liftList')} style={styles} />
        </View>
        <View>
          <Image style={styles.logoStyle} source={require('../assets/logo.svg')} />
        </View>
      </View>
    );
  }
}

const styles = {
  groupButtonStyle: {
    borderRadius: 50,
    height: 125,
    width: 125,
    // marginTop: 20,
    backgroundColor: '#F3D92D'
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#596479',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 15
  },
  buttonStyle: {
    flex: 1
    // marginBottom: 50
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
    margin: 10
  },
  myButtonStyle: {
    color: '#F3D92D',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  logoStyle: {
    width: 132,
    height: 116,
    marginBottom: 35
  }
};

export default DashScreen;
