/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  projectHeader: {
    id: `${scope}.project.header`,
    defaultMessage: 'Predict the Winner!',
  },
  projectMessage: {
    id: `${scope}.project.message`,
    defaultMessage:
      'Quick Project to set matchups, where people can predicts the winner, and see who can predicts the winner the most times',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
