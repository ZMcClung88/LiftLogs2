import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Button } from 'react-native-elements';
import { liftFetch } from '../actions';
import LiftListItem from '../components/LiftListItem';

class LiftList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Lifts',
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
          onPress={() => navigation.navigate('addLift')}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0,122,255,1)"
        />
      )
    };
  };

  componentWillMount() {
    this.props.liftFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ lifts }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(lifts);
  }

  renderRow(lift) {
    console.log('lift', lift);
    return <LiftListItem lift={lift} />;
  }

  render() {
    return <ListView enableEmptySections dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

const mapStateToProps = state => {
  const lifts = _.map(state.lifts, (val, uid) => {
    return { ...val, uid };
  });

  return { lifts };
};

export default connect(mapStateToProps, { liftFetch })(LiftList);
