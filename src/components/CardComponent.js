import React from 'react';
import NavigationComponent from './NavigationComponent.js';

export default class CardComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className={"card " + this.props.cardStyle} style={{width: '25rem'}}>
        {
          this.props.cardHeader && this.props.cardHeader.map(
            (header, index) => (
              <div key={index} className="card-header">
                {
                  this.props.navCard ? <NavigationComponent /> : header
                }
              </div>
            )
          )
        }
        {
          this.props.imageTopSrc && this.props.imageTopSrc.map(
            (image, index) => (<img className="card-img-top" key={index} src={image} alt={this.props.imageAlt} />)
          )
        }
        <div className={this.props.imageOverlay ? "card-img-overlay" : "card-body"}>
          {
            this.props.cardTitle && this.props.cardTitle.map(
              (title, index) => (<h4 key={index} className="card-title">{title}</h4>)
            )
          }
          {
            this.props.cardSubTitle && this.props.cardSubTitle.map(
              (subTitle, index) => (<h6 key={index} className="card-subtitle mb-2 text-muted">{subTitle}</h6>)
            )
          }
          {
            this.props.cardText && this.props.cardText.map(
              (text, index) => (<p key={index} className="card-text">{text}</p>)
            )
          }
          {
            this.props.cardLink && this.props.cardLink.map(
              (link, index) => (<a key={index} href={link} className={this.props.cardLinkStyle[index]}>{this.props.linkTitle[index]}</a>)
            )
          }
        </div>
        <ul className="list-group list-group-flush">
          {
            this.props.listItem && this.props.listItem.map(
              (item, index) => (
                <li key={index} className="list-group-item">{item}</li>
              )
            )
          }
        </ul>
        {
          this.props.imageBottomSrc && this.props.imageBottomSrc.map(
            (image, index) => (<img className="card-img-bottom" key={index} src={image} alt={this.props.imageAlt} />)
          )
        }
        {
          this.props.cardFooter && this.props.cardFooter.map(
            (footer, index) => (<div key={index} className="card-footer text-muted">{footer}</div>)
          )
        }
      </div>
    );
  }
}

CardComponent.defaultProps = {
  cardLinkStyle: ['btn btn-primary']
}
