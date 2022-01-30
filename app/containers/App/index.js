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

import DribbleOnBoardingPage from 'containers/DribbleOnBoardingPage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import DribbleHeader from 'components/DribbleHeader';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: 100%;
  // margin: 0 10px;
  display: flex;
  min-height: 100%;
  // padding: 0 16px;
  flex-direction: column;
`;

// Clone for this Page - https://dribbble.com/shots/15669113-Onboarding-Exploration

// ScrollIntoView https://stackoverflow.com/questions/30495062/how-can-i-scroll-a-div-to-be-visible-in-reactjs

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="Onboarding #Exploration by Eren ✦ on Dribbble"
        defaultTitle="Onboarding #Exploration by Eren ✦ on Dribbble"
      >
        <meta name="description" content="Onboarding #Exploration" />
      </Helmet>
      <DribbleHeader />
      <Switch>
        <Route exact path="/" component={DribbleOnBoardingPage} />
        {/* <Route path="/features" component={FeaturePage} /> */}
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
