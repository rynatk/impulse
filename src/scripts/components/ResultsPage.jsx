import React from 'react';

import ResultsHeader from './ResultsHeader.jsx';
import RouteMap from './RouteMap.jsx';

class ResultsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentModel: this.props.collection.findWhere({
        search_key: this.props.query
      })
    };
  }

  componentWillMount() {
    this.props.collection.on('sync update', this.handleSync);
    this.props.collection.fetch();
  }

  handleSync = () => {
    this.setState({
      currentModel: this.props.collection.findWhere({
        search_key: this.props.query
      })
    });
  }

  render() {
    let primary;
    let secondary;
    let geolocate;

    if (this.state.currentModel) {
      let details = this.state.currentModel.attributes;

      primary = (
        <div className="results">
          <div className="primaryResult">
            <div className="productTitle">
              <p>{details.product_name}</p>
            </div>
            <p className="subtitle1">Product Name</p>
            <div className="location">
              <p>{details.store_info.name}</p>
            </div>
            <p className="subtitle1">Store Name</p>
            <div className="address">
              <p>{details.store_info.address.street}</p>
              <p>{details.store_info.address.cityStateZip}</p>
            </div>
            <p className="subtitle1">Store Address</p>
          </div>
          <div className="imageDiv">
            <img className="productImage" src={`./images/${details.image_filename}`} alt={details.image_filename} width="300px"></img>
          </div>
        </div>
      );

      secondary = (
        <div className="secondaryResults">
          <h4>Alternative Locations</h4>
          <ul>
            <li><a href="#">{details.alternative_locations[0]}</a></li>
            <li><a href="#">{details.alternative_locations[1]}</a></li>
            <li><a href="#">{details.alternative_locations[2]}</a></li>
          </ul>
        </div>
      );

      geolocate = details.store_info.coordinates;
    }

    return (
      <div>
        <div className="resultsFixedHeight">
          <ResultsHeader/>
          {primary}
          <RouteMap geolocation={geolocate}/>
          {secondary}
        </div>
      </div>
    );
  }
}

export default ResultsPage;
