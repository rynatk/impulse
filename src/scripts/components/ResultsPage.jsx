import React from 'react';

import SmallSearch from './SmallSearch.jsx';
import RouteMap from './RouteMap.jsx';

class ResultsPage extends React.Component {
  render() {
    return (
    <div>
      <div className="results">
      <div className="leftSection">
        <div className="primaryResult">
          <h1>Tropicana Premium Orange Juice [2mi]</h1>
          <div className="address">
            <p>Publix Supermarket</p>
            <p>Something Ave N</p>
            <p>St. Petersburg, Fl 3360?</p>
          </div>
        </div>
      </div>

      <div className="rightSection">
        <div className="secondaryResults">
          <h4>Alternative Products:</h4>
          <ul>
            <li><a href="#">Something Something Orange Juice [4mi]</a></li>
            <li><a href="#">Another Thing Goes Here [2mi]</a></li>
            <li><a href="#">And Don't Forget About This! [9mi]</a></li>
          </ul>
        </div>
      </div>
      </div>
      <SmallSearch/>
      <RouteMap/>
    </div>
    );
  }
}

export default ResultsPage;
