import React from 'react';
import styled from 'styled-components';

// components
import Page from './components/Page';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PageFooter from './components/PageFooter';
import { Split, SplitContent, ImageCover } from './components/Split';
import Banner from './components/Banner';

// assets
import hero from './assets/hero.jpg';
import climb from './assets/climb.jpg';
import banner1 from './assets/banner-1.jpg';
import banner2 from './assets/banner-2.jpg';

// stub - can be replaced with content from CMS or API
import * as content from './content';

const PageHeader = styled.header``;
const PageMain = styled.main``;

const App = () => {
  return (
    <Page>
      <PageHeader>
        <Navbar />
      </PageHeader>

      <PageMain>
        <Hero bg={hero} content={content.hero_content} />

        <Split>
          <SplitContent>{content.split_content1_left}</SplitContent>
          <ImageCover img={climb}>{content.split_content1_right}</ImageCover>
        </Split>

        <Banner bg={banner1} content={content.banner_content1} />

        <Split>
          <SplitContent>{content.split_content2_left}</SplitContent>
          <SplitContent>{content.split_content2_right}</SplitContent>
        </Split>

        <Banner right bg={banner2} content={content.banner_content2} />

        <Split>
          <SplitContent>{content.split_content3_left}</SplitContent>
          <SplitContent>{content.split_content3_right}</SplitContent>
        </Split>
      </PageMain>

      <PageFooter />
    </Page>
  );
};

export default App;
