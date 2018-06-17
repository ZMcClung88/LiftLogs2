import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
// import firebase from 'firebase';
// import config from './config';

import store from './store/';
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import DashScreen from './screens/DashScreen';
import AddEmployee from './screens/AddEmployeeScreen';
import AddLift from './screens/AddLiftScreen';
import AnouncementScreen from './screens/AnouncementScreen';
import EmployeeList from './screens/EmployeeListScreen';
import LiftList from './screens/LiftListScreen';
import MenuScreen from './screens/MenuScreen';
import ScheduleScreen from './screens/ScheduleScreen';

export default class App extends Component {
  render() {
    const MainNavigator = createBottomTabNavigator(
      {
        welcome: WelcomeScreen,
        auth: AuthScreen,
        dash: {
          screen: createStackNavigator({
            dash: DashScreen,
            menu: MenuScreen,
            addEmp: AddEmployee,
            addLift: AddLift,
            notes: AnouncementScreen,
            sched: ScheduleScreen,
            liftList: LiftList,
            empList: EmployeeList
          })
        }
      },
      {
        navigationOptions: {
          tabBarVisible: false
        }
      }
    );

    return (
      <Provider store={store}>
        <View style={styles.container}>
          {/* <Text>App!</Text>
          <WelcomeScreen />
          <AuthScreen />
          <DashScreen /> */}
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#596479'
  }
});
