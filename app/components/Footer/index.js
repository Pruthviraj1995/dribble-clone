import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section className="pink-color">
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <FormattedMessage {...messages.dribbledCount} />
        <span className="pink-color">
          <FormattedMessage {...messages.shotsDribbled} />
        </span>
      </section>
    </Wrapper>
  );
}

export default Footer;
