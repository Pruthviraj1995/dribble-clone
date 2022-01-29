import React from 'react';
import { FormattedMessage } from 'react-intl';
import InboxIcon from 'images/icons8-mail-50.png';
import messages from './messages';
import { Avatar } from './components';
import { AvatarLine } from './Styled';
import DrippleButton from '../../components/Button/DrippleButton';

export const HireMeSeperator = () => (
  <div className="d-flex flex-column align-items-center w-100 mt-70">
    <div className="d-flex w-100 align-items-center">
      <AvatarLine />
      <span className="ml-24 mr-24">
        <Avatar width={70} />
      </span>
      <AvatarLine />
    </div>

    <div className="d-flex flex-column align-items-center mt-24">
      <span className="font-bold font-size-20">
        <FormattedMessage {...messages.erenStar} />
      </span>
      <FormattedMessage {...messages.letsCreateAmazing} />
      <DrippleButton className="mt-16">
        <span className="font-bold font-size-14">
          <img
            src={InboxIcon}
            alt="inbox"
            className="height-15 mr-5 bg-white "
          />
          <FormattedMessage {...messages.hireMe} />
        </span>
      </DrippleButton>
    </div>
  </div>
);
