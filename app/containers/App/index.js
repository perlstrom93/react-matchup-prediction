/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import MatchupPage from 'containers/MatchupPage/Loadable';
import SetMatchupPage from 'containers/SetMatchupPage/Loadable';
import ResolveMatchupPage from 'containers/ResolveMatchupPage/Loadable';
import LeaderboardPage from 'containers/LeaderboardPage/Loadable';
import HistoryPage from 'containers/HistoryPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Matchup Prediction"
        defaultTitle="Matchup Prediction"
      >
        <meta name="description" content="A Matchup Prediction application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/activeMatchup" component={MatchupPage} />
        <Route path="/setMatchup" component={SetMatchupPage} />
        <Route path="/resolveMatchup" component={ResolveMatchupPage} />
        <Route path="/leaderboard" component={LeaderboardPage} />
        <Route path="/history" component={HistoryPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
