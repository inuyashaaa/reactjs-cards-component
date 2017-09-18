import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import CardComponent from '../components/CardComponent.js';
import '../styles/card.css';
import '../index.css';

const CardInput = {
  cardHeader: ["Card Header"],
  imageTopLink: ["https://static.pexels.com/photos/400678/pexels-photo-400678.jpeg"],
  imageBottomLink: ["https://static.pexels.com/photos/400678/pexels-photo-400678.jpeg"],
  imageAlt: ["Card image cap"],
  cardTitle: ["Card title"],
  cardSubTitle: ["Card subtitle"],
  cardText: ["Some quick example text to build on the card title."],
  cardLink: ["https://www.google.com.vn"],
  linkTitle: ["Card Link"],
  listItem: ["Inuyashaa", "Kagome", "Nakaru"],
  cardFooter: ["Card Footer"],
}

storiesOf('Example', module)
  .add('Example', () =>
    <CardComponent
      imageTopSrc={CardInput.imageTopLink}
      imageAlt={CardInput.imageAlt}
      cardTitle={CardInput.cardTitle}
      cardText={CardInput.cardText}
      cardLink={CardInput.cardLink}
      linkTitle={CardInput.linkTitle}
    />
)
storiesOf('Content types', module)
  .add('Blocks', () =>
    <CardComponent
      cardText={CardInput.cardText}
    />
  )
  .add('Titles, text, and links', () =>
    <CardComponent
      cardTitle={CardInput.cardTitle}
      cardSubTitle={CardInput.cardSubTitle}
      cardText={CardInput.cardText}
      cardLink={CardInput.cardLink}
      linkTitle={CardInput.linkTitle}
      cardLinkStyle={['card-link']}
    />
  )
  .add('Images', () =>
    <CardComponent
      imageTopSrc={CardInput.imageTopLink}
      imageAlt={CardInput.imageAlt}
      cardText={CardInput.cardText}
    />
  )
  .add('List groups', () =>
    <CardComponent
      listItem={CardInput.listItem}
    />
  )
  .add('Kitchen sink', () =>
    <CardComponent
      imageTopSrc={CardInput.imageTopLink}
      imageAlt={CardInput.imageAlt}
      cardTitle={CardInput.cardTitle}
      cardText={CardInput.cardText}
      listItem={CardInput.listItem}
    />
  )
  .add('Header and footer', () =>
    <CardComponent
      cardStyle="text-center"
      cardHeader={CardInput.cardHeader}
      cardTitle={CardInput.cardTitle}
      cardText={CardInput.cardText}
      cardLink={CardInput.cardLink}
      linkTitle={CardInput.linkTitle}
      cardFooter={CardInput.cardFooter}
    />
)
storiesOf('Sizing', module)
  .add('Using grid markup', () =>
    <div className="row">
      <div className="col-sm-6">
        <CardComponent
          imageTopSrc={CardInput.imageTopLink}
          imageAlt={CardInput.imageAlt}
          cardTitle={CardInput.cardTitle}
          cardText={CardInput.cardText}
          cardLink={CardInput.cardLink}
          linkTitle={CardInput.linkTitle}
        />
      </div>
      <div className="col-sm-6">
        <CardComponent
          imageTopSrc={CardInput.imageTopLink}
          imageAlt={CardInput.imageAlt}
          cardTitle={CardInput.cardTitle}
          cardText={CardInput.cardText}
          cardLink={CardInput.cardLink}
          linkTitle={CardInput.linkTitle}
        />
      </div>
    </div>
  )
  .add('Using utilities', () =>
    <div>
      <CardComponent
        cardStyle="w-75"
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
        cardLink={CardInput.cardLink}
        linkTitle={CardInput.linkTitle}
      />
      <CardComponent
        cardStyle="w-50"
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
        cardLink={CardInput.cardLink}
        linkTitle={CardInput.linkTitle}
      />
    </div>
  )
  .add('Using custom CSS', () =>
    <CardComponent
      cardTitle={CardInput.cardTitle}
      cardText={CardInput.cardText}
      cardLink={CardInput.cardLink}
      linkTitle={CardInput.linkTitle}
    />
)
storiesOf('Text alignment', module)
  .add('Text left', () =>
    <CardComponent
      cardStyle="text-left"
      cardTitle={CardInput.cardTitle}
      cardText={CardInput.cardText}
      cardLink={CardInput.cardLink}
      linkTitle={CardInput.linkTitle}
    />
  )
  .add('Text center', () =>
    <CardComponent
      cardStyle="text-center"
      cardTitle={CardInput.cardTitle}
      cardText={CardInput.cardText}
      cardLink={CardInput.cardLink}
      linkTitle={CardInput.linkTitle}
    />
  )
  .add('Text right', () =>
    <CardComponent
      cardStyle="text-right"
      cardTitle={CardInput.cardTitle}
      cardText={CardInput.cardText}
      cardLink={CardInput.cardLink}
      linkTitle={CardInput.linkTitle}
    />
  )
storiesOf('Navigation', module)
  .add('Navigation', () =>
    <CardComponent
      cardStyle="text-center"
      cardHeader={CardInput.cardHeader}
      navCard={true}
      cardTitle={CardInput.cardTitle}
      cardText={CardInput.cardText}
      cardLink={CardInput.cardLink}
      linkTitle={CardInput.linkTitle}
    />
  )
storiesOf('Images', module)
  .add('Image caps', () =>
    <div>
      <CardComponent
        imageTopSrc={CardInput.imageTopLink}
        imageAlt={CardInput.imageAlt}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
      <br />
      <CardComponent
        imageBottomSrc={CardInput.imageBottomLink}
        imageAlt={CardInput.imageAlt}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
    </div>
  )
  .add('Image overlays', () =>
    <CardComponent
      imageTopSrc={CardInput.imageTopLink}
      imageAlt={CardInput.imageAlt}
      cardTitle={CardInput.cardTitle}
      cardText={CardInput.cardText}
      imageOverlay={true}
    />
)
storiesOf('Card styles', module)
  .add('Background and color', () =>
    <div>
      <CardComponent
        cardStyle="text-white bg-primary mb-3"
        cardHeader={CardInput.cardHeader}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
      <br />
      <CardComponent
        cardStyle="text-white bg-secondary mb-3"
        cardHeader={CardInput.cardHeader}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
      <br />
      <CardComponent
        cardStyle="text-white bg-success mb-3"
        cardHeader={CardInput.cardHeader}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
      <br />
      <CardComponent
        cardStyle="text-white bg-danger mb-3"
        cardHeader={CardInput.cardHeader}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
      <br />
      <CardComponent
        cardStyle="text-white bg-warning mb-3"
        cardHeader={CardInput.cardHeader}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
      <br />
      <CardComponent
        cardStyle="text-white bg-info mb-3"
        cardHeader={CardInput.cardHeader}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
      <br />
      <CardComponent
        cardStyle="bg-light <mb-3></mb-3>"
        cardHeader={CardInput.cardHeader}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
      <br />
      <CardComponent
        cardStyle="text-white bg-dark mb-3"
        cardHeader={CardInput.cardHeader}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
      <br />
    </div>
  )
  .add('Border', () =>
    <div>
      <CardComponent
        cardStyle="text-white border-primary mb-3"
        cardBodyStyle="text-primary"
        cardHeader={CardInput.cardHeader}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
      <br />
      <CardComponent
        cardStyle="text-white border-secondary mb-3"
        cardHeader={CardInput.cardHeader}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
      <br />
      <CardComponent
        cardStyle="text-white border-success mb-3"
        cardHeader={CardInput.cardHeader}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
      <br />
      <CardComponent
        cardStyle="text-white border-danger mb-3"
        cardHeader={CardInput.cardHeader}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
      <br />
      <CardComponent
        cardStyle="text-white border-warning mb-3"
        cardHeader={CardInput.cardHeader}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
      <br />
      <CardComponent
        cardStyle="text-white border-info mb-3"
        cardHeader={CardInput.cardHeader}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
      <br />
      <CardComponent
        cardStyle="border-light <mb-3></mb-3>"
        cardHeader={CardInput.cardHeader}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
      <br />
      <CardComponent
        cardStyle="text-white border-dark mb-3"
        cardHeader={CardInput.cardHeader}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
      />
      <br />
    </div>
  )
  .add('Mixins utilities', () =>
    <CardComponent
      cardStyle="text-center border-success mb-3"
      cardHeader={CardInput.cardHeader}
      cardTitle={CardInput.cardTitle}
      cardText={CardInput.cardText}
      cardFooter={CardInput.cardFooter}
    />
)
storiesOf('Card layout', module)
  .add('Card groups', () =>
    <div className="card-group">
      <CardComponent
        imageTopSrc={CardInput.imageTopLink}
        imageAlt={CardInput.imageAlt}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
        cardLink={CardInput.cardLink}
        linkTitle={CardInput.linkTitle}
      />
      <CardComponent
        imageTopSrc={CardInput.imageTopLink}
        imageAlt={CardInput.imageAlt}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
        cardLink={CardInput.cardLink}
        linkTitle={CardInput.linkTitle}
      />
      <CardComponent
        imageTopSrc={CardInput.imageTopLink}
        imageAlt={CardInput.imageAlt}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
        cardLink={CardInput.cardLink}
        linkTitle={CardInput.linkTitle}
      />
    </div>
  )
  .add('Card decks', () =>
    <div className="card-deck">
      <CardComponent
        imageTopSrc={CardInput.imageTopLink}
        imageAlt={CardInput.imageAlt}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
        cardLink={CardInput.cardLink}
        linkTitle={CardInput.linkTitle}
      />
      <CardComponent
        imageTopSrc={CardInput.imageTopLink}
        imageAlt={CardInput.imageAlt}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
        cardLink={CardInput.cardLink}
        linkTitle={CardInput.linkTitle}
      />
      <CardComponent
        imageTopSrc={CardInput.imageTopLink}
        imageAlt={CardInput.imageAlt}
        cardTitle={CardInput.cardTitle}
        cardText={CardInput.cardText}
        cardLink={CardInput.cardLink}
        linkTitle={CardInput.linkTitle}
      />
    </div>
)
