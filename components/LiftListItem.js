import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { CardSection } from './common';

class LiftListItem extends Component {
  onRowPress(props) {
    console.log('lift list item props', this.props);
    // Actions.liftEdit({ lift: this.props.lift });
  }

  render() {
    const { name } = this.props.lift;

    return (
      <TouchableOpacity onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableOpacity>
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

export default LiftListItem;
