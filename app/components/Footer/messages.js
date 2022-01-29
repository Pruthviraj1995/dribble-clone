/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  licenseMessage: {
    id: `${scope}.license-message`,
    defaultMessage: '© 2022 Dribbble. All rights reserved.',
  },
  dribbledCount: {
    id: `${scope}.dribbled-count`,
    defaultMessage: '17,387,085 ',
  },
  shotsDribbled: {
    id: `${scope}.shots-dribbbled`,
    defaultMessage: ' shots dribbbled',
  },
});
