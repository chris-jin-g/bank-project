import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import saga from 'containers/DepositsPage/saga';
import reducer from 'containers/DepositsPage/reducer';


import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


// Import Components
import LabelWrapper from 'components/LabelWrapper';
import InputWrapper from 'components/InputWrapper';
import ButtonWrapper from 'components/ButtonWrapper';
import RadioWrapper from 'components/RadioWrapper';
import RadioItem from 'components/RadioItem'; 
import RadioButtonLabel from 'components/RadioButtonLabel';
import RadioButton from 'components/RadioButton';
import RadioRowItem from 'components/RadioRowItem';
import PaymentImg from 'components/PaymentImg';
import CurrencyToggle from 'components/App/Currency';
import CurrencyAlert from 'components/App/CurrencyAlert';
import LocaleToggle from 'components/LocaleToggle';
import TextWrapper from 'components/App/TextWrapper';
import ContainerWrapper from './ContainerWrapper';
import FormWrapper from './FormWrapper';
import SelectWrapper from '../SelectWrapper';
import messages from './messages';

// Import Actions
import {
  changeNewNameAction,
  changeNewSurnameAction,
  changeNewPasswordAction,
  changeNewEmailAction,
  saveDataAction,
  loadUserDataAction,
  loadCurrencyAction,
  ChangeDepositsAmount,
  depositsAction,
  depositsErrorAction
} from 'containers/DepositsPage/actions';

// Import Selectors
import { makeIsOpenNavigationDesktopSelector } from 'containers/App/selectors';
import {
  makeNameSelector,
  makeSurnameSelector,
  makeEmailSelector,
  makeNewPasswordSelector,
  makeNewNameSelector,
  makeNewSurnameSelector,
  makeNewEmailSelector,
  makeErrorPasswordSelector,
  makeErrorNameSelector,
  makeErrorSurnameSelector,
  makeErrorEmailSelector,
  makeMessageSelector,
  makeCurrencySelector,
  makeCurrencyIdSelector,
  makeCurrencyMessageSelector,
  makeIsOpenAlertSelector,
  makeErrorSelector,
  makeIsLoadingSelector,
  makeErrorAmount,
} from 'containers/DepositsPage/selectors';

const stateSelector = createStructuredSelector({
  name: makeNameSelector(),
  surname: makeSurnameSelector(),
  email: makeEmailSelector(),
  newPassword: makeNewPasswordSelector(),
  newName: makeNewNameSelector(),
  newSurname: makeNewSurnameSelector(),
  newEmail: makeNewEmailSelector(),
  errorPassword: makeErrorPasswordSelector(),
  errorName: makeErrorNameSelector(),
  errorSurname: makeErrorSurnameSelector(),
  errorEmail: makeErrorEmailSelector(),
  error: makeErrorSelector(),
  message: makeMessageSelector(),
  currency: makeCurrencySelector(),
  currencyId: makeCurrencyIdSelector(),
  currencyMessage: makeCurrencyMessageSelector(),
  isOpenAlert: makeIsOpenAlertSelector(),
  isLoading: makeIsLoadingSelector(),
  isOpenNavigationDesktop: makeIsOpenNavigationDesktopSelector(),
  errorAmount: makeErrorAmount(),
});

const key = 'settingsPage';

export default function SettingsForm() {
  const dispatch = useDispatch(); 
  const onChangeName = e => dispatch(changeNewNameAction(e.target.value));
  const onChangeSurname = e => dispatch(changeNewSurnameAction(e.target.value));
  const onChangePassword = e =>
    dispatch(changeNewPasswordAction(e.target.value));
  const onChangeEmail = e => dispatch(changeNewEmailAction(e.target.value));
  const onSaveData = e => dispatch(saveDataAction()) && e.preventDefault();
  const onLoadUserData = () => dispatch(loadUserDataAction());
  const onLoadCurrency = () => dispatch(loadCurrencyAction());
  const onChangeDepositsAmount = e =>dispatch(ChangeDepositsAmount(e.target.value));
  const onDepositsRequest = e => dispatch(depositsAction()) && e.preventDefault();
  const {
    name,
    newName,
    errorName,
    surname,
    newSurname,
    errorSurname,
    email,
    newEmail,
    errorEmail,
    errorPassword,
    error,
    message,
    currency,
    currencyId,
    currencyMessage,
    isLoading,
    isOpenNavigationDesktop,
    errorAmount,
  } = useSelector(stateSelector);

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (!name || !surname || !email || !currencyId) onLoadUserData();
    if (currency.length === 0) onLoadCurrency();
  }, []);



  return (
    <ContainerWrapper open={isOpenNavigationDesktop}>
      <FormWrapper>
        <form noValidate autoComplete="off" onSubmit={onSaveData}>
          
          <RadioWrapper>
            <RadioRowItem>
              <RadioItem>
                <RadioButton
                  type="radio"
                  name="radio"
                  value="paypal"
                  defaultChecked
                />
                <RadioButtonLabel />
                <div>Paypal</div>              
              </RadioItem>
              <PaymentImg src={require('../../../images/paypal.png')}></PaymentImg>
            </RadioRowItem>
            <RadioRowItem>
              <RadioItem>
                <RadioButton
                  type="radio"
                  name="radio"
                  value="amazon"
                  disabled
                />
                <RadioButtonLabel />
                <div>Amazon Payment</div>
              </RadioItem>
              <PaymentImg src={require('../../../images/amazon.png')}></PaymentImg>
            </RadioRowItem>            
            <RadioRowItem>
              <RadioItem>
                <RadioButton
                  type="radio"
                  name="radio"
                  value="usapay"
                  disabled
                />
                <RadioButtonLabel />
                <div>USAPay</div>
              </RadioItem>
              <PaymentImg src={require('../../../images/usapay.png')}></PaymentImg>
            </RadioRowItem>
            <RadioRowItem>
              <RadioItem>
                <RadioButton
                  type="radio"
                  name="radio"
                  value="skrill"
                  disabled
                />
                <RadioButtonLabel />
                <div>Skrill</div>
              </RadioItem>
              <PaymentImg src={require('../../../images/skrill.png')}></PaymentImg>
            </RadioRowItem>
            <RadioRowItem>
              <RadioItem>
                <RadioButton
                  type="radio"
                  name="radio"
                  value="visa"
                  disabled
                />
                <RadioButtonLabel />
                <div>Visa</div>
              </RadioItem>
              <PaymentImg src={require('../../../images/visa.png')}></PaymentImg>
            </RadioRowItem>
          </RadioWrapper>

          
        </form>
      </FormWrapper>

      <FormWrapper>
        <form noValidate autoComplete="off" onSubmit={onDepositsRequest}>
          <div>
            <LabelWrapper>
              <FormattedMessage {...messages.depositsCurrency} />
            </LabelWrapper>
            <SelectWrapper>
              <CurrencyToggle />
            </SelectWrapper>
          </div>

          <div>
            <LabelWrapper>
              <FormattedMessage {...messages.depositsAmount} />
            </LabelWrapper>

            <InputWrapper
              key={1}
              type="number"
              error={errorName}
              onChange={onChangeDepositsAmount}
            /> 
            {errorAmount && (
              <LabelWrapper error={errorAmount}>{errorAmount}</LabelWrapper>
            )}         
          </div>
          <ButtonWrapper type="submit" disabled={isLoading}>
            <FormattedMessage {...messages.confirmPay} />
          </ButtonWrapper>
        </form>
      </FormWrapper>
    </ContainerWrapper>
  );
}
