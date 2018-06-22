import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection } from './common/CardSection';
import { Card } from './common/Card';
import { Input } from './common';
import MyCheckBox from './MyCheckBox';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class EmployeeForm extends Component {
  state = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  };

  render() {
    console.log('state', this.state);
    // console.log('props', this.props);

    return (
      <ScrollView>
        >
        <CardSection style={{ height: 40, backgroundColor: 'white' }}>
          <Input
            label="First Name"
            placeholder="Jane"
            value={this.props.firstName}
            onChangeText={value => this.props.employeeUpdate({ prop: 'firstName', value })}
          />
        </CardSection>
        <CardSection style={{ height: 40, backgroundColor: 'white' }}>
          <Input
            label="Last Name"
            placeholder="Johnson"
            value={this.props.lastName}
            onChangeText={value => this.props.employeeUpdate({ prop: 'lastName', value })}
          />
        </CardSection>
        <CardSection style={{ height: 40, backgroundColor: 'white' }}>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection>
          {/* <CheckBox
            title="Monday"
            onPress={() => this.setState({ monday: !this.state.monday })}
            checked={this.state.monday}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />

          <CheckBox
            onPress={() => this.setState({ tuesday: !this.state.tuesday })}
            checked={this.state.tuesday}
            title="Tuesday"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />

          <CheckBox
            onPress={() => this.setState({ wednesday: !this.state.wednesday })}
            checked={this.state.wednesday}
            title="Wednesday"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />

          <CheckBox
            onPress={() => this.setState({ thursday: !this.state.thursday })}
            checked={this.state.thursday}
            title="Thursday"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />

          <CheckBox
            onPress={() => this.setState({ friday: !this.state.friday })}
            checked={this.state.friday}
            title="Friday"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />

          <CheckBox
            onPress={() => this.setState({ saturday: !this.state.saturday })}
            checked={this.state.saturday}
            title="Saturday"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />

          <CheckBox
            onPress={() => this.setState({ sunday: !this.state.sunday })}
            checked={this.state.sunday}
            title="Sunday"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          /> */}
          <MyCheckBox day="Monday" />
          <MyCheckBox day="Tuesday" />
          <MyCheckBox day="Wednesday" />
          <MyCheckBox day="Thursday" />
          <MyCheckBox day="Friday" />
          <MyCheckBox day="Saturday" />
          <MyCheckBox day="Sunday" />
        </CardSection>
      </ScrollView>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  // console.log('state', state);
  const { firstName, lastName, phone, shifts } = state.employeeForm;

  return { firstName, lastName, phone, shifts };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
