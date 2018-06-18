import { combineReducers } from 'redux';
import auth from './auth_reducer';
import employee_form_reducer from './employee_form_reducer.js';
import employee_reducer from './employee_reducer';
import lift_form_reducer from './lift_form_reducer';
import lift_reducer from './lift_reducer';

export default combineReducers({
  auth,
  employeeForm: employee_form_reducer,
  employees: employee_reducer,
  liftForm: lift_form_reducer,
  lifts: lift_reducer
});
