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
    const { firstName, lastName, phone, shifts } = this.props;
    this.props.employeeCreate({ firstName, lastName, phone, shifts });
    this.props.props.navigation.navigate('empList');
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
  console.log('state here', state);
  const { firstName, lastName, phone, shifts } = state.employeeForm;

  return { firstName, lastName, phone, shifts };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
