import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import CardComponent from '../components/CardComponent.js';
import '../styles/card.css';
import '../styles/index.css';

const CardInput = {
  imageLink: ["https://static.pexels.com/photos/400678/pexels-photo-400678.jpeg"],
  imageAlt: ["Card image cap"],
  cardTitle: ["Card title"],
  cardText: ["Some quick example text to build on the card title."],
  cardLink: ["https://www.google.com.vn", "https://facebook.com"],
  linkTitle: ["Go to Google","Facebook"],
}

storiesOf('Example', module).add('Simple', () =>
  <CardComponent
    imageSrc={CardInput.imageLink}
    imageAlt={CardInput.imageAlt}
    cardTitle={CardInput.cardTitle}
    cardText={CardInput.cardText}
    cardLink={CardInput.cardLink}
    linkTitle={CardInput.linkTitle}
  />,
);
