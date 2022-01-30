import React from 'react';
import DribbleLight from 'images/dribble-light.png';
import DribbleFooterLogo from 'images/dribble-footer-logo.png';
import TwitterLogo from 'images/twitter-logo.png';
import FacebookLogo from 'images/facebook-logo.png';
import InstagramLogo from 'images/instagram-logo.jpg';
import PinInterestLogo from 'images/pinInterest-logo.png';

export const FooterLogo = () => {
  const socialLinks = [
    {
      title: 'Dribble Icon',
      image: DribbleFooterLogo,
      link: 'https://dribbble.com/dribbble',
    },
    {
      title: 'Twitter Icon',
      image: TwitterLogo,
      link: 'https://twitter.com/dribbble',
    },
    {
      title: 'Facebook Icon',
      image: FacebookLogo,
      link: 'https://www.facebook.com/dribbble',
    },
    {
      title: 'Instagram Icon',
      image: InstagramLogo,
      link: 'https://www.instagram.com/dribbble/',
    },
    {
      title: 'PinInterest Icon',
      image: PinInterestLogo,
      link: 'https://www.pinterest.com/Pinner13145726/',
    },
  ];

  return (
    <div>
      <img
        src={DribbleLight}
        alt="dribble-logo"
        className="height-20 width-100 cursor-pointer"
      />
      <div className="d-flex flex-column mt-20 mb-20 font-description font-weight-40">
        <span>Dribbble is the world’s leading </span>
        <span>community for creatives to share, grow,</span>
        <span>and get hired.</span>
      </div>
      <div>
        {socialLinks.map(socialLink => (
          <a href={socialLink.link} title={socialLink.title} target="_blank">
            <img
              src={socialLink.image}
              alt={socialLink.title}
              className="height-24 width-24 mr-14"
            />
          </a>
        ))}
      </div>
    </div>
  );
};
