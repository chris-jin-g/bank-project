import React from 'react';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import ApiEndpoint from 'utils/api';
import { FormattedMessage } from 'react-intl';
import messages from 'containers/WithdrawPage/messages';

// Import Services
import AuthService from 'services/auth.service';

import {
  makeNameSelector,
  makeSurnameSelector,
  makeEmailSelector,
  makeCurrencyIdSelector,
} from 'containers/DashboardPage/selectors';
import {
  makeNewNameSelector,
  makeNewSurnameSelector,
  makeNewPasswordSelector,
  makeNewEmailSelector,
  makeErrorNameSelector,
  makeErrorSurnameSelector,
  makeErrorPasswordSelector,
  makeErrorEmailSelector,
  makeNewCurrencyIdSelector,
  makeWithdrawAmountSelector,
  makeWithdrawCurrency,
  makePaypalAccount,
  makeWithdrawCurrencyName,
  makeUserID,
} from 'containers/WithdrawPage/selectors';

// Import Actions
import {
  loadUserDataSuccessAction,
  loadUserDataErrorAction,
  loadCurrencyErrorAction,
  loadCurrencySuccessAction,
  enterNewNameAction,
  enterNewNameErrorAction,
  enterNewSurnameAction,
  enterNewSurnameErrorAction,
  enterNewPasswordAction,
  enterNewPasswordErrorAction,
  enterNewEmailAction,
  enterNewEmailErrorAction,
  saveDataErrorAction,
  enterNewNameSuccessAction,
  enterNewSurnameSuccessAction,
  enterNewEmailSuccessAction,
  enterNewPasswordSuccessAction,
  enterNewCurrencySuccessAction,
  saveDataSuccessAction,
  withdrawAction,
  withdrawErrorAction,
} from 'containers/WithdrawPage/actions';

// Import Constants
import {
  LOAD_USER_DATA,
  LOAD_CURRENCY,
  SAVE_DATA,
  ENTER_NEW_CURRENCY,
  ON_WITHDRAW_REQUEST,
} from 'containers/WithdrawPage/constants';

export function* handleUserData() {
  const api = new ApiEndpoint();
  const auth = new AuthService();
  const token = auth.getToken();
  const userName = yield select(makeNameSelector());
  const userSurname = yield select(makeSurnameSelector());
  const userEmail = yield select(makeEmailSelector());
  const currencyId = yield select(makeCurrencyIdSelector());
  const requestUserData = api.getUsersPath();
  const requestBillsData = api.getBillsPath();

  if (!userName || !userSurname || !userEmail || !currencyId) {
    try {
      const responseUserData = yield call(request, requestUserData, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const responseBillsData = yield call(request, requestBillsData, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (responseUserData && responseBillsData) {
        const { name, surname, email,userid } = responseUserData;
        const userCurrencyId = responseBillsData.currency.id;
        if (!name || !surname || !email || !userCurrencyId)
          return yield put(
            loadUserDataErrorAction(
              <FormattedMessage {...messages.errorServer} />,
            ),
          );

        yield put(
          loadUserDataSuccessAction(name, surname, email, userCurrencyId,userid),
        );
      }
    } catch (error) {
      yield put(loadUserDataErrorAction(error));
    }
  } else
    yield put(
      loadUserDataSuccessAction(userName, userSurname, userEmail, currencyId),
    );
}


export function* handleWithdraw() {
  alert("23432");
  const auth = new AuthService();
  const api = new ApiEndpoint();
  const token = auth.getToken();
  const requestURL = api.getWithdrawPath();
  let withdrawAmount=yield select(makeWithdrawAmountSelector());
  let withdrawCurrency = yield select(makeWithdrawCurrencyName());
  let email = yield select(makePaypalAccount());
  let userID = yield select(makeUserID());
  
  yield all([
    email ? call(handleEmail) : (email = null),
  ]);
  const errorEmail = yield select(makeErrorEmailSelector());
  const withdrawURL=requestURL+"?amount="+withdrawAmount+"&currency=USD&account="+email+"&userID="+userID;
  console.log(userID);
  console.log(errorEmail);
  console.log(email);
  console.log(withdrawAmount);
  console.log(withdrawCurrency);
  if (!withdrawAmount)
    return yield put(
      withdrawErrorAction(<FormattedMessage {...messages.errorAmount} />),
    );
  else
      window.open(withdrawURL,'_self'); 
}



// Individual exports for testing
export default function* settingsPageSaga() {
  yield takeLatest(LOAD_USER_DATA, handleUserData);
  yield takeLatest(LOAD_CURRENCY, handleCurrency);
  yield takeLatest([SAVE_DATA, ENTER_NEW_CURRENCY], handleSaveData);
  yield takeLatest(ON_WITHDRAW_REQUEST, handleWithdraw);
}
