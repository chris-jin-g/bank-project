import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import saga from 'containers/WithdrawPage/saga';
import reducer from 'containers/WithdrawPage/reducer';


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
import CurrencyToggle from 'components/App/WithdrawCurrency';
import CurrencyAlert from 'components/App/CurrencyAlert';
import LocaleToggle from 'components/LocaleToggle';
import TextWrapper from 'components/App/TextWrapper';
import ContainerWrapper from './ContainerWrapper';
import FormWrapper from './FormWrapper';
import SelectWrapper from '../SelectWrapper';
import messages from './messages';

// Import Actions
import {
  loadUserDataAction,
  loadCurrencyAction,
  ChangeWithdrawAmount,
  withdrawAction,
  withdrawErrorAction,
  changePaypalAccountAction,
} from 'containers/WithdrawPage/actions';

// Import Selectors
import { makeIsOpenNavigationDesktopSelector } from 'containers/App/selectors';
import {
  makeNewEmailSelector,
  makeErrorEmailSelector,
  makeMessageSelector,
  makeCurrencySelector,
  makeCurrencyIdSelector,
  makeCurrencyMessageSelector,
  makeErrorSelector,
  makeErrorWithdrawAmount,
  makeErrorWithdrawEmail,
} from 'containers/WithdrawPage/selectors';

const stateSelector = createStructuredSelector({
  message: makeMessageSelector(),
  currency: makeCurrencySelector(),
  currencyId: makeCurrencyIdSelector(),
  errorWithdrawAmount: makeErrorWithdrawAmount(),
  errorWithdrawEmail: makeErrorWithdrawEmail(),
});

const key = 'settingsPage';

export default function SettingsForm() {
  const dispatch = useDispatch(); 
  const onSaveData = e => dispatch(saveDataAction()) && e.preventDefault();
  const onLoadUserData = () => dispatch(loadUserDataAction());
  const onLoadCurrency = () => dispatch(loadCurrencyAction());
  const onChangeWithdrawAmount = e =>dispatch(ChangeWithdrawAmount(e.target.value));
  const onWithdrawRequest = e => dispatch(withdrawAction()) && e.preventDefault();
  const onChangePaypalAccount = e => dispatch(changePaypalAccountAction(e.target.value));
  const {
    errorName,
    errorEmail,
    error,
    message,
    currency,
    currencyId,
    isLoading,
    isOpenNavigationDesktop,
    errorWithdrawAmount,
    errorWithdrawEmail,
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
        <form noValidate autoComplete="off" onSubmit={onWithdrawRequest}>
          <div>
            <LabelWrapper>
              <FormattedMessage {...messages.withdrawCurrency} />
            </LabelWrapper>
            <SelectWrapper>
              <CurrencyToggle />
            </SelectWrapper>
          </div>

          <div>
            <LabelWrapper>
              <FormattedMessage {...messages.withdrawAmount} />
            </LabelWrapper>

            <InputWrapper
              key={1}
              type="number"
              error={errorWithdrawAmount}
              onChange={onChangeWithdrawAmount}
            /> 
            {errorWithdrawAmount && (
              <LabelWrapper error={errorWithdrawAmount}>{errorWithdrawAmount}</LabelWrapper>
            )}         
          </div>
          <div>
            <LabelWrapper>
              <FormattedMessage {...messages.paypalAccount} />
            </LabelWrapper>

            <InputWrapper
              key={2}
              type="email"
              error={errorWithdrawEmail}
              onChange={onChangePaypalAccount}
            /> 
            {errorWithdrawEmail && (
              <LabelWrapper error={errorWithdrawEmail}>{errorWithdrawEmail}</LabelWrapper>
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
