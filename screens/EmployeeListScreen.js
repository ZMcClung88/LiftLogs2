import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import EmployeeListItem from '../components/EmployeeListItem';
// import EmployeeModal from '../components/EmployeeModal';

class EmployeeList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Employees',
      tabBarIcon: () => {
        return <Icon name="favorite" size={30} />;
      },
      headerTintColor: 'royalblue',
      headerStyle: {
        backgroundColor: '#1e304f'
      },
      headerRight: (
        <Button
          title="Add"
          onPress={() => navigation.navigate('addEmp')}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0,122,255,1)"
        />
      )
    };
  };

  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employees) {
    // console.log('employees', employees);
    return <EmployeeListItem employee={employees} />;
  }

  render() {
    return (
      <View>
        {/* <EmployeeModal /> */}
        <ListView enableEmptySections dataSource={this.dataSource} renderRow={this.renderRow} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
