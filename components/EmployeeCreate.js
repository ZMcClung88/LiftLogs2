import React, { Component } from 'react';
import { View, connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Spinner, Button } from './common';
// import { Card } from './common/Card';
// import { CardSection } from './common/CardSection';
// import { Button } from './common/Button';
// import { Spinner } from './common/Spinner';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    console.log('employee form props');
    const { firstName, lastName, phone } = this.props;
    this.props.employeeCreate({ firstName, lastName, phone });
    this.props.props.navigation.navigate('menu');
  }

  render() {
    return (
      <Card style={{ height: 1000 }}>
        <CardSection style={{ height: 40, marginBottom: 10 }}>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
        <CardSection>
          <EmployeeForm {...this.props} />
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { firstName, lastName, phone } = state.employeeForm;

  return { firstName, lastName, phone };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
