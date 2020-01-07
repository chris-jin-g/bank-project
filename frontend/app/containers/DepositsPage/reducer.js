/*
 *
 * SettingsPage reducer
 *
 */
import produce from 'immer';
import { LOCATION_CHANGE } from 'connected-react-router';
import { LOGOUT_SUCCESS, LOGOUT_ERROR } from 'containers/App/constants';
import {
  CHANGE_NEW_PASSWORD,
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
  LOAD_CURRENCY_SUCCESS,
  LOAD_CURRENCY_ERROR,
  CHANGE_DEPOSITS_AMOUNT,
  ON_DEPOSITS_REQUEST,
  CHANGE_DEPOSITS_CURRENCY,
  DEPOSITS_DATA_ERROR,
  LOAD_CRPT_DATA_SUCCESS,
  ON_HANDLE_CLOSEALERT,
  ON_HANDLE_COPYSUCCESS,
  ON_HANDLE_CLOSECOPYALERT,
} from './constants';
import { differenceInQuarters } from 'date-fns';

export const initialState = {
  name: '',
  surname: '',
  email: '',
  newPassword: '',
  newName: '',
  newSurname: '',
  newEmail: '',
  errorPassword: '',
  errorName: '',
  errorSurname: '',
  errorEmail: '',
  error: '',
  message: '',
  currency: [],
  currencyId: 1,
  newCurrencyId: null,
  currencyMessage: '',
  isOpenAlert: false,
  isLoading: false,
  depositsAmount:'',
  depositsCurrency: 1,
  depositsCurrencyName:'USD',
  errorAmount:'',
  userID:'',
  cryptoAddress:'',
  addCrptAmount:'',
  totalCrptAmount:'',
  newCrptStatus:'',
  crptAddressCopyStatus:'',
};

/* eslint-disable default-case, no-param-reassign */
const settingsPageReducer = produce((draft, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      draft.name = '';
      draft.surname = '';
      draft.email = '';
      draft.newPassword = '';
      draft.newName = '';
      draft.newSurname = '';
      draft.newEmail = '';
      draft.errorPassword = '';
      draft.errorName = '';
      draft.errorSurname = '';
      draft.errorEmail = '';
      draft.error = '';
      draft.message = '';
      draft.currency = [];
      draft.currencyId = 1;
      draft.newCurrencyId = null;
      draft.currencyMessage = '';
      draft.isOpenAlert = false;
      draft.isLoading = false;
      break;
    case LOGOUT_ERROR:
      draft.name = '';
      draft.surname = '';
      draft.email = '';
      draft.newPassword = '';
      draft.newName = '';
      draft.newSurname = '';
      draft.newEmail = '';
      draft.errorPassword = '';
      draft.errorName = '';
      draft.errorSurname = '';
      draft.errorEmail = '';
      draft.error = '';
      draft.message = '';
      draft.currency = [];
      draft.currencyId = 1;
      draft.newCurrencyId = null;
      draft.currencyMessage = '';
      draft.isOpenAlert = false;
      draft.isLoading = false;
      break;
    case LOCATION_CHANGE:
      draft.name = '';
      draft.surname = '';
      draft.email = '';
      draft.newCurrencyId = null;
      draft.newPassword = '';
      draft.newName = '';
      draft.newSurname = '';
      draft.newEmail = '';
      draft.errorPassword = '';
      draft.errorName = '';
      draft.errorSurname = '';
      draft.errorEmail = '';
      draft.error = '';
      draft.message = '';
      draft.currencyMessage = '';
      draft.isOpenAlert = false;
      draft.newCurrencyId = null;
      draft.isLoading = false;
      break;
    case LOAD_USER_DATA:
      draft.isLoading = true;
      break;
    case LOAD_USER_DATA_SUCCESS:
      draft.name = action.name;
      draft.surname = action.surname;
      draft.email = action.email;
      draft.currencyId = action.currencyId;
      draft.isLoading = false;
      draft.userID=action.userid;
      draft.cryptoAddress=action.cryptoAddress;
      break;
    case LOAD_USER_DATA_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
    case CHANGE_NEW_NAME:
      draft.newName = action.name;
      draft.name = '';
      draft.error = '';
      draft.errorName = '';
      draft.message = '';
      break;
    case ENTER_NEW_NAME:
      draft.newName = action.name;
      break;
    case ENTER_NEW_NAME_SUCCESS:
      draft.name = '';
      break;
    case ENTER_NEW_NAME_ERROR:
      draft.errorName = action.error;
      draft.isLoading = false;
      break;
    case CHANGE_NEW_SURNAME:
      draft.newSurname = action.surname;
      draft.surname = '';
      draft.errorSurname = '';
      draft.error = '';
      draft.message = '';
      break;
    case ENTER_NEW_SURNAME:
      draft.newSurname = action.surname;
      break;
    case ENTER_NEW_SURNAME_SUCCESS:
      draft.surname = '';
      break;
    case ENTER_NEW_SURNAME_ERROR:
      draft.errorSurname = action.error;
      draft.isLoading = false;
      break;
    case CHANGE_NEW_PASSWORD:
      draft.newPassword = action.password;
      draft.errorPassword = '';
      draft.error = '';
      draft.message = '';
      break;
    case CHANGE_NEW_EMAIL:
      draft.newEmail = action.email;
      draft.email = '';
      draft.errorEmail = '';
      draft.error = '';
      draft.message = '';
      break;
    case ENTER_NEW_EMAIL:
      draft.newEmail = action.email;
      break;
    case ENTER_NEW_EMAIL_SUCCESS:
      draft.email = '';
      break;
    case ENTER_NEW_EMAIL_ERROR:
      draft.errorEmail = action.error;
      draft.isLoading = false;
      break;
    case ENTER_NEW_CURRENCY:
      draft.isLoading = true;
      break;
    case ENTER_NEW_CURRENCY_SUCCESS:
      draft.isLoading = false;
      draft.currencyId = action.newCurrencyId;
      draft.isOpenAlert = false;
      draft.currencyMessage = action.message;
      draft.newCurrencyId = null;
      break;
    case ENTER_NEW_CURRENCY_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
    case SAVE_DATA:
      draft.isLoading = true;
      break;
    case SAVE_DATA_SUCCESS:
      draft.isLoading = false;
      draft.message = action.message;
      break;
    case SAVE_DATA_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
    case LOAD_CURRENCY_SUCCESS:
      draft.currency = action.currency;
      break;
    case LOAD_CURRENCY_ERROR:
      draft.error = action.error;
      break;
    case CHANGE_NEW_CURRENCY:
      draft.isOpenAlert = true;
      draft.newCurrencyId = action.currencyId;
      draft.currencyMessage = '';
      break;
    case TOGGLE_ALERT_CURRENCY:
      draft.isOpenAlert = !draft.isOpenAlert;
      break;
    case CHANGE_DEPOSITS_AMOUNT:
      draft.depositsAmount=action.amount;
      break;
    case ON_DEPOSITS_REQUEST:
      draft.depositRequest=true;
      break;
    case CHANGE_DEPOSITS_CURRENCY:
      draft.depositsCurrency = action.depositsCurrency;
      draft.depositsCurrencyName=action.depositsCurrencyName;
      break;
    case DEPOSITS_DATA_ERROR:
      draft.errorAmount=action.error;
      break;
    case LOAD_CRPT_DATA_SUCCESS:
      draft.addCrptAmount = action.addCrptAmount;
      draft.totalCrptAmount = action.totalCrptAmount;
      draft.newCrptStatus = action.newCrptStatus;
      break;
    case ON_HANDLE_CLOSEALERT:
      draft.newCrptStatus = action.status;
      break;
    case ON_HANDLE_COPYSUCCESS:
      draft.crptAddressCopyStatus = action.copyStatus;
      break;
    case ON_HANDLE_CLOSECOPYALERT:
      draft.crptAddressCopyStatus = action.status;
      break;
  }
}, initialState);

export default settingsPageReducer;
