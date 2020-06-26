import React from 'react';
import styled, { css } from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const CarouselWrapper = styled.div`
  & .slide {
    background: none;
    padding: 2em;
  }
`;

const Arrow = styled.i`
  position: absolute;
  z-index: 2;
  top: calc(50% - 15px);
  width: 30px;
  height: 30px;
  cursor: pointer;
  text-align: center;
`;

const Indicator = styled.i`
  color: ${(props) => (props.active ? '#000' : '#ccc')};
  width: 0.8em;
  height: 0.8em;
  font-size: 0.6em;
  display: inline-block;
  text-align: center;
  margin: 0 8px;
`;

const RenderPrevArrow = ({ onClickHandler, label }) => (
  <Arrow
    className='fas fa-chevron-left'
    onClick={onClickHandler}
    title={label}
    style={{ left: 15 }}
  ></Arrow>
);

const RenderNextArrow = ({ onClickHandler, label }) => (
  <Arrow
    right
    className='fas fa-chevron-right'
    onClick={onClickHandler}
    title={label}
    style={{ right: 15 }}
  ></Arrow>
);

export const Testimony = styled.div``;
export const TestimonyHeading = styled.div`
  color: purple;
`;
export const TestimonyBody = styled.div`
  text-align: left;
  padding: 1em 2em;
`;

export const TestimonyCarousel = ({ children }) => (
  <CarouselWrapper>
    <Carousel
      showStatus={false}
      infiniteLoop
      showThumbs={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <RenderPrevArrow onClickHandler={onClickHandler} label={label} />
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <RenderNextArrow onClickHandler={onClickHandler} label={label} />
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <Indicator
              active
              className='fas fa-circle'
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            ></Indicator>
          );
        }
        return (
          <Indicator
            className='fas fa-circle'
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role='button'
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          ></Indicator>
        );
      }}
    >
      {children}
    </Carousel>
  </CarouselWrapper>
);
