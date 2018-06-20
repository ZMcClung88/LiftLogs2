import firebase from 'firebase';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_FETCH_SUCCESS } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ firstName, lastName, phone }) => {
  const { currentUser } = firebase.auth();
  // console.log(firebase.auth);
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ firstName, lastName, phone })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeFetch = user => {
  // console.log('user', user);
  return { type: EMPLOYEE_FETCH_SUCCESS, payload: user };
};
