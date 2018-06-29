import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { CardSection } from './common';
import Modal from 'react-native-modal';
import { liftDelete } from '../actions/lift_actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class LiftListItem extends Component {
  state = {
    isModalVisible: false
  };

  onRowPress(props) {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  onDelete = props => {
    const lift = this.props.lift;
    this.props.liftDelete(lift);
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    const { name } = this.props.lift;

    return (
      <View>
        <TouchableOpacity onPress={this.onRowPress.bind(this)}>
          <View>
            <CardSection style={styles.containerStyle}>
              <Text style={styles.titleStyle}>{name}</Text>
            </CardSection>
          </View>
        </TouchableOpacity>
        <Modal
          isVisible={this.state.isModalVisible}
          backdropColor="#596479"
          backdropOpacity={0.9}
          swipeThreshold={50}
          swipeDirection={'down'}
          onSwipe={() => {
            this.setState({ isModalVisible: !this.state.isModalVisible });
          }}
        >
          <View style={styles.modalStyle}>
            <View style={styles.modalTextContainer}>
              <Image style={{ marginBottom: 25, height: 125, width: 125 }} source={require('../assets/lift.png')} />
              <Text style={styles.modalText}>{name}</Text>
              <CardSection>
                <Button
                  raised
                  rounded
                  title="Delete"
                  backgroundColor="red"
                  icon={{ name: 'delete-forever' }}
                  onPress={this.onDelete}
                  style={{ width: SCREEN_WIDTH * 0.7, borderRadius: 5, marginTop: 25 }}
                />
              </CardSection>
            </View>
          </View>
          <TouchableOpacity onPress={this.onRowPress.bind(this)} />
        </Modal>
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
  },
  modalStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalTextContainer: {
    height: SCREEN_HEIGHT * 0.9,
    width: SCREEN_WIDTH * 0.9,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#d6d7da',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalText: {
    color: '#1e304f',
    fontSize: 28
  }
};

export default connect(null, { liftDelete })(LiftListItem);
