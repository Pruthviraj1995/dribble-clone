import React from 'react';
import DribbleLogo from 'images/dribble-favicon.svg';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export const FooterCopyRight = () => (
  <div className="w-100 pt-32 pb-32 d-flex justify-content-between">
    <section className="pink-color">
      <FormattedMessage {...messages.licenseMessage} />
    </section>
    <section className="d-flex align-items-center">
      <span className="font-weight-50">
        <FormattedMessage {...messages.dribbledCount} />
      </span>

      <span className="pink-color mr-5 ml-5">
        <FormattedMessage {...messages.shotsDribbled} />
      </span>
      <img
        src={DribbleLogo}
        alt="DribbleLogo"
        className="height-24 weight-24"
      />
    </section>
  </div>
);
