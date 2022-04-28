import { act } from 'react-dom/test-utils';
import actionTypes from '../actions/actionTypes';
import {
  LOGGED_IN,
  LOGGED_OUT,
  LOGIN_CANCELLED,
  LOGIN_ERROR,
} from './../statusTypes';
import initialState from './initialState';

export default function userRole(state = initialState.login, action) {
  let newState;
  switch (action.type) {
    case actionTypes.GET_WAX_USER:
      newState = {
        ...state,
        isLogging: true,
      };
      return newState;
    case actionTypes.LOGIN_SUCCESS:
      console.log('LOGIN_SUCCESS', action);
      newState = {
        ...state,
        status: LOGGED_IN,
        isLogged: true,
        isLogging: false,
        userAccount: action.userAccount,
      };
      return newState;
    case actionTypes.LOGOUT:
      newState = {
        ...state,
        status: LOGGED_OUT,
        isLogged: false,
        userAccount: null,
      };
      return newState;
    case actionTypes.LOGIN_ERROR:
      newState = {
        ...state,
        status: LOGIN_ERROR,
        isLogged: false,
        isLogging: false,
      };
      return newState;
    case actionTypes.LOGIN_CANCELLED:
      newState = {
        ...state,
        status: LOGIN_CANCELLED,
        isLogged: false,
        isLogging: false,
      };
      return newState;
    default:
      return state;
  }
}
