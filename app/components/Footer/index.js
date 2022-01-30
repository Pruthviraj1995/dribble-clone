import React from 'react';

import { FooterLogo } from './FooterLogo';
import { FooterCopyRight } from './FooterCopyRight';
import Wrapper from './Wrapper';

function Footer() {
  return (
    <Wrapper>
      <div className="footer-container">
        <FooterLogo />
      </div>
      <FooterCopyRight />
    </Wrapper>
  );
}

export default Footer;
