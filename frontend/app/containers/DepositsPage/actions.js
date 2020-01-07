/*
 *
 * SettingsPage actions
 *
 */

import {
  CHANGE_NEW_PASSWORD,
  ENTER_NEW_PASSWORD,
  ENTER_NEW_PASSWORD_SUCCESS,
  ENTER_NEW_PASSWORD_ERROR,
  CHANGE_NEW_NAME,
  ENTER_NEW_NAME,
  ENTER_NEW_NAME_SUCCESS,
  ENTER_NEW_NAME_ERROR,
  CHANGE_NEW_SURNAME,
  ENTER_NEW_SURNAME,
  ENTER_NEW_SURNAME_SUCCESS,
  ENTER_NEW_SURNAME_ERROR,
  CHANGE_NEW_EMAIL,
  ENTER_NEW_EMAIL,
  ENTER_NEW_EMAIL_SUCCESS,
  ENTER_NEW_EMAIL_ERROR,
  SAVE_DATA,
  SAVE_DATA_SUCCESS,
  SAVE_DATA_ERROR,
  TOGGLE_ALERT_CURRENCY,
  CHANGE_NEW_CURRENCY,
  ENTER_NEW_CURRENCY,
  ENTER_NEW_CURRENCY_SUCCESS,
  ENTER_NEW_CURRENCY_ERROR,
  LOAD_USER_DATA,
  LOAD_USER_DATA_SUCCESS,
  LOAD_USER_DATA_ERROR,
  LOAD_CURRENCY,
  LOAD_CURRENCY_SUCCESS,
  LOAD_CURRENCY_ERROR,
  CHANGE_DEPOSITS_AMOUNT,
  ON_DEPOSITS_REQUEST,
  CHANGE_DEPOSITS_CURRENCY,
  DEPOSITS_DATA_ERROR,
  ON_HANDLE_COPY,
  ON_HANDLE_CONFIRMDEPOSITS,
  LOAD_CRPT_DATA_SUCCESS,
  ON_HANDLE_CLOSEALERT,
  ON_HANDLE_COPYSUCCESS,
  ON_HANDLE_CLOSECOPYALERT,
} from './constants';

export function loadUserDataAction() {
  return {
    type: LOAD_USER_DATA,
  };
}

export function loadUserDataSuccessAction(name, surname, email, currencyId,userid,cryptoAddress) {
  return {
    type: LOAD_USER_DATA_SUCCESS,
    name,
    surname,
    email,
    currencyId,
    userid,
    cryptoAddress,
  };
}

export function loadCrptDataSuccessAction(addCrptAmount, totalCrptAmount,newCrptStatus) {
  return {
    type: LOAD_CRPT_DATA_SUCCESS,
    addCrptAmount,
    totalCrptAmount,
    newCrptStatus,
  };
}

export function loadUserDataErrorAction(error) {
  return {
    type: LOAD_USER_DATA_ERROR,
    error,
  };
}

export function loadCurrencyAction() {
  return {
    type: LOAD_CURRENCY,
  };
}

export function loadCurrencySuccessAction(currency) {
  return {
    type: LOAD_CURRENCY_SUCCESS,
    currency,
  };
}

export function loadCurrencyErrorAction(error) {
  return {
    type: LOAD_CURRENCY_ERROR,
    error,
  };
}

export function toggleAlertCurrencyAction() {
  return {
    type: TOGGLE_ALERT_CURRENCY,
  };
}

export function changeNewCurrencyAction(currencyId) {
  return {
    type: CHANGE_NEW_CURRENCY,
    currencyId,
  };
}

export function enterNewCurrencyAction(currencyId) {
  return {
    type: ENTER_NEW_CURRENCY,
    currencyId,
  };
}

export function enterNewCurrencySuccessAction(message, newCurrencyId) {
  return {
    type: ENTER_NEW_CURRENCY_SUCCESS,
    message,
    newCurrencyId,
  };
}

export function enterNewCurrencyErrorAction(error) {
  return {
    type: ENTER_NEW_CURRENCY_ERROR,
    error,
  };
}

export function saveDataAction() {
  return {
    type: SAVE_DATA,
  };
}

export function saveDataSuccessAction(message) {
  return {
    type: SAVE_DATA_SUCCESS,
    message,
  };
}

export function saveDataErrorAction(error) {
  return {
    type: SAVE_DATA_ERROR,
    error,
  };
}

export function changeNewPasswordAction(password) {
  return {
    type: CHANGE_NEW_PASSWORD,
    password,
  };
}

export function enterNewPasswordAction(password) {
  return {
    type: ENTER_NEW_PASSWORD,
    password,
  };
}

export function enterNewPasswordSuccessAction() {
  return {
    type: ENTER_NEW_PASSWORD_SUCCESS,
  };
}

export function enterNewPasswordErrorAction(error) {
  return {
    type: ENTER_NEW_PASSWORD_ERROR,
    error,
  };
}

export function changeNewNameAction(name) {
  return {
    type: CHANGE_NEW_NAME,
    name,
  };
}

export function enterNewNameAction(name) {
  return {
    type: ENTER_NEW_NAME,
    name,
  };
}

export function enterNewNameSuccessAction(name) {
  return {
    type: ENTER_NEW_NAME_SUCCESS,
    name,
  };
}

export function enterNewNameErrorAction(error) {
  return {
    type: ENTER_NEW_NAME_ERROR,
    error,
  };
}

export function changeNewSurnameAction(surname) {
  return {
    type: CHANGE_NEW_SURNAME,
    surname,
  };
}

export function enterNewSurnameAction(surname) {
  return {
    type: ENTER_NEW_SURNAME,
    surname,
  };
}

export function enterNewSurnameSuccessAction(surname) {
  return {
    type: ENTER_NEW_SURNAME_SUCCESS,
    surname,
  };
}

export function enterNewSurnameErrorAction(error) {
  return {
    type: ENTER_NEW_SURNAME_ERROR,
    error,
  };
}

export function changeNewEmailAction(email) {
  return {
    type: CHANGE_NEW_EMAIL,
    email,
  };
}

export function enterNewEmailAction(email) {
  return {
    type: ENTER_NEW_EMAIL,
    email,
  };
}

export function enterNewEmailSuccessAction(email) {
  return {
    type: ENTER_NEW_EMAIL_SUCCESS,
    email,
  };
}

export function enterNewEmailErrorAction(error) {
  return {
    type: ENTER_NEW_EMAIL_ERROR,
    error,
  };
}
export function ChangeDepositsAmount(amount) {
  return {
    type: CHANGE_DEPOSITS_AMOUNT,
    amount,
  };
}
export function depositsAction() {
  return {
    type: ON_DEPOSITS_REQUEST,
  };
}
export function changeDepositsCurrencyAction(depositsCurrency,depositsCurrencyName){
  return{
    type:CHANGE_DEPOSITS_CURRENCY,
    depositsCurrency,
    depositsCurrencyName,
  }
}
export function depositsErrorAction(error) {
  return {
    type:DEPOSITS_DATA_ERROR,
    error,
  };
}
export function handleCopyAction() {
  return {    
    type: ON_HANDLE_COPY,
  };
}
export function handleConfirmAction() {
  return {    
    type: ON_HANDLE_CONFIRMDEPOSITS,
  };
}
export function handleCloseAction() {
  return {    
    type: ON_HANDLE_CLOSEALERT,
  };
}
export function crptAddressCopySuccessAction(copyStatus){
  return{
    type: ON_HANDLE_COPYSUCCESS,
    copyStatus,
  };
}
export function handleCloseCopyAction() {
  return {
    type:ON_HANDLE_CLOSECOPYALERT,
  };
}