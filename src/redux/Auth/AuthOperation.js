import {
  userRegister,
  userRegisterResolve,
  userRegisterReject,
  userLogin,
  userLoginResolve,
  userLoginReject,
  userLogOut,
  userLogOutResolve,
  userLogOutReject,
} from '../contacts/slice/user';
import { NotificationManager } from 'react-notifications';
import { selectUserToken } from '../Auth/AuthSelectors';

export const registerUser = user => async dispatch => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  dispatch(userRegister());
  try {
    const response = await fetch(
      'https://connections-api.herokuapp.com/users/signup',
      requestOptions,
    ).then(response => response.json());
    if (response.hasOwnProperty('errors')) {
      return NotificationManager.error(response._message, 'Warning');
    }
    if (response.hasOwnProperty('driver')) {
      return NotificationManager.error(response.name, 'Warning');
    } else {
      NotificationManager.success('Registrotion was OK, you need Login');
      dispatch(userRegisterResolve(response));
    }
  } catch (error) {
    dispatch(userRegisterReject(error));
  }
};

export const loginUser = user => async dispatch => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  dispatch(userLogin());
  try {
    await fetch(
      'https://connections-api.herokuapp.com/users/login',
      requestOptions,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          localStorage.removeItem('token');
          NotificationManager.error('error');
        }
      })
      .then(response => {
        localStorage.setItem('token', response.token);
        NotificationManager.success('You Login');
        dispatch(userLoginResolve(response));
      });
  } catch (error) {
    dispatch(userLoginReject(error));
  }
};

export const logOutUser = () => async (dispatch, getState) => {
  const token = selectUserToken(getState());
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  };
  dispatch(userLogOut());
  try {
    const response = await fetch(
      'https://connections-api.herokuapp.com/users/login',
      requestOptions,
    ).then(response => response.json());
    localStorage.removeItem('token');
    dispatch(userLogOutResolve(response));
  } catch (error) {
    dispatch(userLogOutReject(error));
  }
};
