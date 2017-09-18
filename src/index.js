import React from 'react';
import ReactDOM from 'react-dom';
import CardComponent from './components/CardComponent.js';
import './styles/card.css';

const CardInput = {
  imageLink: ["https://static.pexels.com/photos/400678/pexels-photo-400678.jpeg"],
  imageAlt: ["Card image cap"],
  cardTitle: ["Card title"],
  cardText: ["Some quick example text to build on the card title."],
  cardLink: ["https://www.google.com.vn"],
  linkTitle: ["Go to Google"],
}
ReactDOM.render(
  <CardComponent
    imageSrc={CardInput.imageLink}
    imageAlt={CardInput.imageAlt}
    cardTitle={CardInput.cardTitle}
    cardText={CardInput.cardText}
    cardLink={CardInput.cardLink}
    linkTitle={CardInput.linkTitle}
  />,
  document.getElementById('root')
)
