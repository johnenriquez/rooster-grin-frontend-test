import React from 'react';
import styled from 'styled-components';

// components
import Page from './components/Page';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PageFooter from './components/PageFooter';

import * as content from './content';

const PageHeader = styled.header``;
const Banner = styled.div``;
const Split = styled.div``;

const PageMain = styled.main``;

const App = () => {
  return (
    <Page>
      <PageHeader>
        <Navbar />
      </PageHeader>

      <PageMain>
        <Hero />

        <Split>
          <div>{content.split_content1_left}</div>
          <div>{content.split_content1_right}</div>
        </Split>

        <Banner left>{content.banner_content1}</Banner>

        <Split>
          <div>{content.split_content2_left}</div>
          <div>{content.split_content2_right}</div>
        </Split>

        <Banner right>{content.banner_content2}</Banner>

        <Split>
          <div>{content.split_content3_left}</div>
          <div>{content.split_content3_right}</div>
        </Split>
      </PageMain>

      <PageFooter />
    </Page>
  );
};

export default App;
