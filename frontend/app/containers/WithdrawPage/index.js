/**
 *
 * SettingsPage
 *
 */

import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

// Import Selectors
import ContainerWrapper from 'components/App/ContainerWrapper';
import WithdrawForm from 'components/App/WithdrawForm';
import messages from './messages';

export default function SettingsPage() {
  return (
    <Fragment>
      <FormattedMessage {...messages.helmetSettingsTitle}>
        {title => <Helmet title={title} />}
      </FormattedMessage>

      <ContainerWrapper>
        <WithdrawForm />
      </ContainerWrapper>
    </Fragment>
  );
}
