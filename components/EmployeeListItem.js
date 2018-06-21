import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { CardSection } from './common';
// import EmployeeModal from './EmployeeModal';
import { employeeDelete } from '../actions/employee_actions';
import Modal from 'react-native-modal';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class EmployeeListItem extends Component {
  state = {
    isModalVisible: false
  };

  onRowPress(props) {
    console.log('props', this.props);
    const user = this.props.employee;
    // console.log('here', user);
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  onDelete = props => {
    // console.log('on a roll!!!!');
    const user = this.props.employee;
    this.props.employeeDelete(user);
  };

  render() {
    const { firstName, lastName, phone, uid } = this.props.employee;

    return (
      <View>
        {/* <EmployeeModal /> */}
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
              <Image style={{ marginBottom: 25 }} source={require('../assets/profile.png')} />
              <Text style={styles.modalText}>
                {firstName} {lastName}
              </Text>
              <Text style={styles.modalText}>{phone}</Text>
              {/* <Text style={styles.modalText}>{uid}</Text> */}
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

export default connect(null, { employeeDelete })(EmployeeListItem);
