import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { CardSection } from './common';
import { employeeFetch } from '../actions';
import Employee from '../screens/EmployeeScreen';

class EmployeeListItem extends Component {
  onRowPress(props) {
    const user = this.props.employee;
    // console.log('here', user);
    this.props.employeeFetch(user);
  }

  render() {
    const { firstName, lastName, phone, uid } = this.props.employee;

    return (
      <View>
        <TouchableOpacity onPress={this.onRowPress.bind(this)}>
          <View>
            <CardSection style={styles.containerStyle}>
              <Text style={styles.titleStyle}>
                {firstName} {lastName}
              </Text>
              <Text style={styles.phoneStyle}>phone: {phone}</Text>
            </CardSection>
          </View>
        </TouchableOpacity>
        {/* <View>
          <Employee data={this.props.employee} />
        </View> */}
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 24,
    paddingLeft: 15,
    color: '#F3D92D'
  },
  phoneStyle: {
    color: '#1e304f',
    fontWeight: 'bold',
    paddingLeft: 25
  },
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#596479',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default connect(null, { employeeFetch })(EmployeeListItem);
