/**
 *
 * CurrencyToggle
 *
 */

/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import saga from 'containers/WithdrawPage/saga';
import reducer from 'containers/WithdrawPage/reducer';

// Import Components
import Toggle from './Toggle';
import messages from './messages';

// Import Actions
import { changeWithdrawCurrencyAction } from 'containers/WithdrawPage/actions';

// Import Selectors
import {
  makeCurrencySelector,
  makeCurrencyIdSelector,
  makeWithdrawCurrency,
} from 'containers/WithdrawPage/selectors';

const stateSelector = createStructuredSelector({
  currency: makeCurrencySelector(),
  currencyId: makeCurrencyIdSelector(),
  withdrawCurrency: makeWithdrawCurrency(),
});

const key = 'settingsPage';
export default function CurrencyToggle() {
  const dispatch = useDispatch();
  const onChangeCurrency = e =>
    dispatch(changeWithdrawCurrencyAction(parseInt(e.target.value, 10), e.target.options[e.target.selectedIndex].text));
  const { currency, currencyId,withdrawCurrency } = useSelector(stateSelector);


  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  return (
    <Toggle
      value={withdrawCurrency}
      values={currency}
      messages={messages}
      onToggle={onChangeCurrency}
    />
  );
}
