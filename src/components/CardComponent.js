import React from 'react';

export default class CardComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return(
      <div className="card" style={{width: '20rem'}}>
        {
          this.props.imageSrc.map(
            (image, index) => (<img className="card-img-top" key={index} src={image} alt={this.props.imageAlt} />)
          )
        }
        <div className="card-body">
          {
            this.props.cardTitle && this.props.cardTitle.map(
              (title, index) => (<h4 key={index} className="card-title">{title}</h4>)
            )
          }
          {
            this.props.cardText && this.props.cardText.map(
              (text, index) => (<p key={index} className="card-text">{text}</p>)
            )
          }
          {
            this.props.cardLink && this.props.cardLink.map(
              (link, index) => (<a key={index} href={link} className="btn btn-primary">{this.props.linkTitle}</a>)
            )
          }
        </div>
      </div>
    );
  }
}
