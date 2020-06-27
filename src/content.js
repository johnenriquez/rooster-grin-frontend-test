import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

// components
import { IconGrid, IconTitle } from './components/IconTitle';
import { Button, ContentHeading, Link } from './elements';
import {
  TestimonyCarousel,
  Testimony,
  TestimonyHeading,
  TestimonyBody,
} from './components/TestimonyCarousel';

// assets
import expertise from './assets/home-expertise.svg';
import hygiene from './assets/home-hygiene.svg';
import lab from './assets/home-lab.svg';
import retention from './assets/home-retention.svg';

const RatingsWrapper = styled.div`
  color: orange;
`;

const StarRating = ({ rating }) => (
  <RatingsWrapper>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
  </RatingsWrapper>
);

export const hero_content = (
  <>
    <Fade bottom>
      <h1>Welcome to Rooster Grin</h1>
    </Fade>
    <Fade bottom delay={100}>
      <Button color={'purple'} onClick={(e) => e.preventDefault()}>
        Button Button
      </Button>
    </Fade>
  </>
);

export const banner_content1 = (
  <>
    <ContentHeading>Lorem Ipsum</ContentHeading>
    <Button onClick={(e) => e.preventDefault()}>Button Button</Button>
  </>
);

export const banner_content2 = (
  <>
    <ContentHeading>Lorem Ipsum</ContentHeading>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem
      tempus, tempor libero quis, lacinia tortor. Praesent volutpat quis metus
      eu euismod.
    </p>
    <Button onClick={(e) => e.preventDefault()}>Button Button</Button>
  </>
);

export const split_content1_left = (
  <>
    <ContentHeading>Lorem Ipsum</ContentHeading>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem
      tempus, tempor libero quis, lacinia tortor. Praesent volutpat quis metus
      eu euismod. Morbi est dolor, blandit non lacus non, molestie accumsan
      lacus. Maecenas facilisis, nisl in viverra iaculis, purus ipsum imperdiet
      diam, id condimentum augue eros et odio.
    </p>
    <Link href='#!'>&gt; Lorem Ipsum</Link>
  </>
);

export const split_content1_right = <>&nbsp;</>;

export const split_content2_left = (
  <>
    <ContentHeading altStyle>Lorem Ipsum Sit Amet</ContentHeading>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem
      tempus, tempor libero quis, lacinia tortor. Praesent volutpat quis metus
      eu euismod.
    </p>
    <Link href='#!'>&gt; Lorem Ipsum</Link>
  </>
);

export const split_content2_right = (
  <IconGrid>
    <IconTitle src={expertise} title='Lorem' delay={0} />
    <IconTitle src={hygiene} title='Lorem Ipsum' delay={100} />
    <IconTitle src={lab} title='Lorem Ipsum' delay={200} />
    <IconTitle src={retention} title='Lorem' delay={300} />
  </IconGrid>
);

export const split_content3_left = (
  <>
    <ContentHeading altStyle>Lorem Ipsum Dolor Sit Amet</ContentHeading>
    <StarRating rating={5} />
  </>
);

export const split_content3_right = (
  <TestimonyCarousel>
    <Testimony>
      <TestimonyHeading>John Doe 08/08/2019</TestimonyHeading>
      <TestimonyBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem
        tempus, tempor libero quis, lacinia tortor. Praesent volutpat quis metus
        eu euismod. Morbi est dolor, blandit non lacus non, molestie accumsan
        lacus.
      </TestimonyBody>
    </Testimony>
    <Testimony>
      <TestimonyHeading>Jane Doe 07/09/2019</TestimonyHeading>
      <TestimonyBody>
        Morbi est dolor, blandit non lacus non, molestie accumsan lacus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem tempus,
        tempor libero quis, lacinia tortor. Praesent volutpat quis metus eu
        euismod.
      </TestimonyBody>
    </Testimony>
    <Testimony>
      <TestimonyHeading>Jack Doe 08/18/2019</TestimonyHeading>
      <TestimonyBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem
        tempus, tempor libero quis, lacinia tortor. Praesent volutpat quis metus
        eu euismod. Morbi est dolor, blandit non lacus non, molestie accumsan
        lacus.
      </TestimonyBody>
    </Testimony>
  </TestimonyCarousel>
);
