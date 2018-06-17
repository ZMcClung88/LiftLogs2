import React, { Component } from 'react';
import { View, connect } from 'react-redux';
import { liftCreate } from '../actions';
import { Card, CardSection, Spinner, Button } from './common';
// import { Card } from './common/Card';
// import { CardSection } from './common/CardSection';
// import { Button } from './common/Button';
// import { Spinner } from './common/Spinner';
import LiftForm from './LiftForm';

class LiftCreate extends Component {
  onButtonPress() {
    console.log('lift form props', this.props);
    const { name } = this.props;
    this.props.liftCreate({ name });
    this.props.props.navigation.navigate('liftList');
  }

  render() {
    return (
      <Card>
        <LiftForm {...this.props} />
        <CardSection style={{ height: 40 }}>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name } = state.liftForm;

  return { name };
};

export default connect(mapStateToProps, { liftCreate })(LiftCreate);
