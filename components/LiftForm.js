import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { liftUpdate } from '../actions';
import { CardSection } from './common/CardSection';
import { Input } from './common';

class LiftForm extends Component {
  render() {
    return (
      <View>
        <CardSection style={{ height: 40, backgroundColor: 'white' }}>
          <Input
            label="Lift Name"
            placeholder="Eagle Express"
            value={this.props.name}
            onChangeText={value => this.props.liftUpdate({ prop: 'name', value })}
          />
        </CardSection>
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

const mapStateToProps = state => {
  const { name } = state.liftForm;

  return { name };
};

export default connect(mapStateToProps, { liftUpdate })(LiftForm);
