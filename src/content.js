import React from 'react';

// components
import IconTitle from './components/IconTitle';

// assets
import climb from './assets/climb.jpg';
import banner1 from './assets/banner-1.jpg';
import banner2 from './assets/banner-2.jpg';
import expertise from './assets/home-expertise.svg';
import hygiene from './assets/home-hygiene.svg';
import lab from './assets/home-lab.svg';
import retention from './assets/home-retention.svg';

export const banner_content1 = (
  <>
    <img src={banner1} alt='banner1' />
    <h2>Lorem Ipsum</h2>
    <button>Button Button</button>
  </>
);

export const banner_content2 = (
  <>
    <img src={banner2} alt='banner2' />
    <h2>Lorem Ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem
      tempus, tempor libero quis, lacinia tortor. Praesent volutpat quis metus
      eu euismod.
    </p>
    <button>Button Button</button>
  </>
);

export const split_content1_left = (
  <>
    <h2>Lorem Ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem
      tempus, tempor libero quis, lacinia tortor. Praesent volutpat quis metus
      eu euismod. Morbi est dolor, blandit non lacus non, molestie accumsan
      lacus. Maecenas facilisis, nisl in viverra iaculis, purus ipsum imperdiet
      diam, id condimentum augue eros et odio.
    </p>
    <a href='#!'>&gt; Lorem Ipsum</a>
  </>
);

export const split_content1_right = (
  <>
    <img src={climb} alt='climb' />
  </>
);

export const split_content2_left = (
  <>
    <h2>Lorem Ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem
      tempus, tempor libero quis, lacinia tortor. Praesent volutpat quis metus
      eu euismod.
    </p>
    <a href='#!'>&gt; Lorem Ipsum</a>
  </>
);

export const split_content2_right = (
  <>
    <IconTitle src={expertise} title='Lorem' />
    <IconTitle src={hygiene} title='Lorem Ipsum' />
    <IconTitle src={lab} title='Lorem Ipsum' />
    <IconTitle src={retention} title='Lorem' />
  </>
);

export const split_content3_left = (
  <>
    <p>Lorem Ipsum Dolor Sit Amet</p>
    <i class='fas fa-star'></i>
    <i class='fas fa-star'></i>
    <i class='fas fa-star'></i>
    <i class='fas fa-star'></i>
    <i class='fas fa-star'></i>
  </>
);

export const split_content3_right = (
  <>
    <p>John Doe 08/08/2019</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem
      tempus, tempor libero quis, lacinia tortor. Praesent volutpat quis metus
      eu euismod. Morbi est dolor, blandit non lacus non, molestie accumsan
      lacus.
    </p>
  </>
);
