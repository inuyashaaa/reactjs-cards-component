import React from 'react';

export default class NavigationComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return(
      <ul className="nav nav-tabs card-header-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
    </ul>
    );
  }
}
