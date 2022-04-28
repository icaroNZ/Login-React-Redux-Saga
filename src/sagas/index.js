import { call, cancel, cancelled, fork, put, take } from 'redux-saga/effects';
import * as waxjs from '@waxio/waxjs/dist';

export function waxAPI() {
  return new Promise(async (resolve, reject) => {
    const wax = new waxjs.WaxJS({
      rpcEndpoint: 'https://wax.greymass.com',
    });
    try {
      const userAccount = await wax.login();
      resolve(userAccount);
    } catch (error) {
      reject(error);
    }
  });
}

export function* resolveLogin() {
  try {
    const userAccount = yield call(waxAPI);
    yield put({ type: 'LOGIN_SUCCESS', userAccount });
  } catch (error) {
    yield put({ type: 'LOGIN_ERROR', error });
  } finally {
    if (yield cancelled()) {
      yield put({ type: 'LOGIN_CANCELLED' });
    }
  }
}

export function* loginFlow() {
  while (true) {
    yield take('GET_WAX_USER');
    const task = yield fork(resolveLogin);
    const action = yield take(['LOGOUT', 'LOGIN_ERROR']);
    if (action.type === 'LOGOUT') {
      yield cancel(task);
    }
  }
}

export function* logActions() {
  while (true) {
    const action = yield take('*');
  }
}
