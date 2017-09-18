import React from 'react';
import ReactDOM from 'react-dom';
import CardComponent from './components/CardComponent.js';
import './styles/card.css';

const CardInput = {
  cardHeader: ["Card Header"],
  imageTopLink: ["https://static.pexels.com/photos/400678/pexels-photo-400678.jpeg"],
  imageBottomLink: ["https://static.pexels.com/photos/400678/pexels-photo-400678.jpeg"],
  imageAlt: ["Card image cap"],
  cardTitle: ["Card title"],
  cardSubTitle: ["Card subtitle"],
  cardText: ["Some quick example text to build on the card title."],
  cardLink: ["https://www.google.com.vn"],
  linkTitle: ["Go to Google"],
  listItem: ["Inuyashaa", "Kagome", "Nakaru"],
  cardFooter: ["Card Footer"],
}
ReactDOM.render(
  <CardComponent
    cardStyle="border-primary"
    cardHeader={CardInput.cardHeader}
    navCard={true}
    imageTopSrc={CardInput.imageTopLink}
    imageAlt={CardInput.imageAlt}
    cardTitle={CardInput.cardTitle}
    cardSubTitle={CardInput.cardSubTitle}
    cardText={CardInput.cardText}
    cardLink={CardInput.cardLink}
    linkTitle={CardInput.linkTitle}
    listItem={CardInput.listItem}
    imageBottomSrc={CardInput.imageBottomLink}
    cardFooter={CardInput.cardFooter}
    imageOverlay={true}
  />,
  document.getElementById('root')
)
