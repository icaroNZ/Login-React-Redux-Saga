import * as types from './actionTypes';

export const getWaxUserAction = () => {
  return {
    type: types.GET_WAX_USER,
  };
};

export const logoutUserAction = () => {
  return {
    type: types.LOGGED_OUT,
  };
};
