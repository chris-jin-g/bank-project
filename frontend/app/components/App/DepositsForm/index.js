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

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


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
import SpanWrapper from './SpanWrapper';
import CopyButton from './CopyButton';
import ConfirmButton from './ConfirmButton';
import AlertWrapper from './AlertWrapper';
import CloseAlert from './CloseAlert';
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
  handleCopyAction,
  handleConfirmAction,
  handleCloseAction,
  handleCloseCopyAction,
  depositsErrorAction,
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
  makeCryptoAddress,
  makeAddCrptAmount,
  makeTotalCrptAmount,
  makeNewCrptStatus,
  makeCrptCopyStatus,
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
  cryptoAddress: makeCryptoAddress(),
  addCrptAmount: makeAddCrptAmount(),
  totalCrptAmount: makeTotalCrptAmount(),
  newCrptStatus: makeNewCrptStatus(),
  newCrptCopyStatus: makeCrptCopyStatus(),
});

// @@@@@@@
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      class="MuiTypography-root MuiTypography-body1"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <p>{children}</p>
    </Typography>
  );
};
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

// @@@@@@@@

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
  const onHandleCopy = e => dispatch(handleCopyAction());
  const onConfirm = e =>dispatch(handleConfirmAction());
  const onCloseAlert = e=>dispatch(handleCloseAction());
  const onCloseCopyAlert = e=> dispatch(handleCloseCopyAction());
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
    cryptoAddress,
    addCrptAmount,
    totalCrptAmount,
    newCrptStatus,
    newCrptCopyStatus,
  } = useSelector(stateSelector);

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (!name || !surname || !email || !currencyId) onLoadUserData();
    if (currency.length === 0) onLoadCurrency();
  }, []);

  // @@@@@@@@@@
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // @@@@@@@@@@2
  const qr_container={
    textAlign:'center'
  };

  return (
    <ContainerWrapper open={isOpenNavigationDesktop}>
      <FormWrapper>
        <form noValidate autoComplete="off" onSubmit={onSaveData}>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Payment GateWay" {...a11yProps(0)} />
              <Tab label="Crypto Currency" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
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
          </TabPanel>
          <TabPanel value={value} index={1}>
          <RadioWrapper>
              <RadioRowItem>
                <RadioItem>
                  <RadioButton
                    type="radio"
                    name="radio"
                    value="Bitcoin"
                    defaultChecked
                  />
                  <RadioButtonLabel />
                  <div>Bitcoin</div>              
                </RadioItem>
                <PaymentImg src={require('../../../images/bitcoin.png')}></PaymentImg>
              </RadioRowItem>
              <RadioRowItem>
                <RadioItem>
                  <RadioButton
                    type="radio"
                    name="radio"
                    value="bitcoin_cash"
                    disabled
                  />
                  <RadioButtonLabel />
                  <div>Bitcoin Cash</div>
                </RadioItem>
                <PaymentImg src={require('../../../images/bitcoin_cash.png')}></PaymentImg>
              </RadioRowItem>            
              <RadioRowItem>
                <RadioItem>
                  <RadioButton
                    type="radio"
                    name="radio"
                    value="ether"
                    disabled
                  />
                  <RadioButtonLabel />
                  <div>Ether</div>
                </RadioItem>
                <PaymentImg src={require('../../../images/ether.png')}></PaymentImg>
              </RadioRowItem>
              <RadioRowItem>
                <RadioItem>
                  <RadioButton
                    type="radio"
                    name="radio"
                    value="stellar"
                    disabled
                  />
                  <RadioButtonLabel />
                  <div>Stellar</div>
                </RadioItem>
                <PaymentImg src={require('../../../images/stellar.png')}></PaymentImg>
              </RadioRowItem>
              <RadioRowItem>
                <RadioItem>
                  <RadioButton
                    type="radio"
                    name="radio"
                    value="usd_pax"
                    disabled
                  />
                  <RadioButtonLabel />
                  <div>USD PAX</div>
                </RadioItem>
                <PaymentImg src={require('../../../images/usd_pax.png')}></PaymentImg>
              </RadioRowItem>
            </RadioWrapper>
          </TabPanel> 
          

          
        </form>
      </FormWrapper>
        
        <TabPanel value={value} index={0}>
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
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FormWrapper>
          <form noValidate autoComplete="off" onSubmit={onDepositsRequest}>
            <div style={qr_container}>
              <img src={"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl= "+cryptoAddress}></img><br></br>
              <SpanWrapper>{cryptoAddress}</SpanWrapper>
              <CopyButton src={require('../../../images/copy_btn.png')} onClick={onHandleCopy}></CopyButton><br></br>
              <ConfirmButton  onClick={onConfirm}>Confirm</ConfirmButton>
            </div>
            </form>
          </FormWrapper>
        </TabPanel>
        {newCrptStatus &&(
          <AlertWrapper>
            You deposited {addCrptAmount} BTC.<br></br>Your current balance is {totalCrptAmount} BTC.
            <CloseAlert onClick={onCloseAlert}>X</CloseAlert>
          </AlertWrapper>
        )}
        {newCrptCopyStatus && (
          <AlertWrapper>
            Bitcoin address successfully copied to clipboard.
            <CloseAlert onClick={onCloseCopyAlert}>X</CloseAlert>
          </AlertWrapper>
        )}
        
          
    </ContainerWrapper>
  );
}
