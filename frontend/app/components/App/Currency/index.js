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
import saga from 'containers/DepositsPage/saga';
import reducer from 'containers/DepositsPage/reducer';

// Import Components
import Toggle from './Toggle';
import messages from './messages';

// Import Actions
import { changeDepositsCurrencyAction } from 'containers/DepositsPage/actions';

// Import Selectors
import {
  makeCurrencySelector,
  makeCurrencyIdSelector,
  makeDepositsCurrency,
} from 'containers/DepositsPage/selectors';

const stateSelector = createStructuredSelector({
  currency: makeCurrencySelector(),
  currencyId: makeCurrencyIdSelector(),
  depositsCurrency: makeDepositsCurrency(),
});

const key = 'settingsPage';
export default function CurrencyToggle() {
  const dispatch = useDispatch();
  const onChangeCurrency = e =>
    dispatch(changeDepositsCurrencyAction(parseInt(e.target.value, 10), e.target.options[e.target.selectedIndex].text));
  const { currency, currencyId,depositsCurrency } = useSelector(stateSelector);


  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  return (
    <Toggle
      value={depositsCurrency}
      values={currency}
      messages={messages}
      onToggle={onChangeCurrency}
    />
  );
}
