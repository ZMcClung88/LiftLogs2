import firebase from 'firebase';
import { LIFT_CREATE, LIFT_FETCH_SUCCESS, LIFT_UPDATE } from './types';

export const liftUpdate = ({ prop, value }) => {
  return {
    type: LIFT_UPDATE,
    payload: { prop, value }
  };
};

export const liftCreate = ({ name }) => {
  const { currentUser } = firebase.auth();
  console.log(firebase.auth);
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/lifts`)
      .push({ name })
      .then(() => {
        dispatch({ type: LIFT_CREATE });
      });
  };
};

export const liftFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/lifts`)
      .on('value', snapshot => {
        dispatch({ type: LIFT_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
