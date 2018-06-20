import { combineReducers } from 'redux';
import auth from './auth_reducer';
import employee_form_reducer from './employee_form_reducer.js';
import employees_reducer from './employees_reducer';
import lift_form_reducer from './lift_form_reducer';
import lift_reducer from './lift_reducer';
import weather_reducer from './weather_reducer';

export default combineReducers({
  auth,
  employeeForm: employee_form_reducer,
  employees: employees_reducer,
  liftForm: lift_form_reducer,
  lifts: lift_reducer,
  weather: weather_reducer
});
