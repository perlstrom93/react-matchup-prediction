/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  activeMatchup: {
    id: `${scope}.activeMatchup`,
    defaultMessage: 'Active Matchup',
  },
  setMatchup: {
    id: `${scope}.setMatchup`,
    defaultMessage: 'Set Matchup',
  },
  resolveMatchup: {
    id: `${scope}.resolveMatchup`,
    defaultMessage: 'Resolve Matchup',
  },
  leaderboard: {
    id: `${scope}.leaderboard`,
    defaultMessage: 'Leaderboard',
  },
  history: {
    id: `${scope}.history`,
    defaultMessage: 'History',
  },
});
