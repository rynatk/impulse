import React from 'react';

import Overlay from './Overlay.jsx';
import SearchHeader from './SearchHeader.jsx';
import LargeSearch from './LargeSearch.jsx';
import Map from './Map.jsx';

import {Products} from '../product.js';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      revealed: false
    }
  }

  handleScroll = () => {
    this.setState({
      revealed: window.scrollY >= document.documentElement.clientHeight
    });
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  render() {
    return (
    <div>
      <Overlay/>
      <SearchHeader/>
      <div className={ this.state.revealed ? 'overlayUnAdjust' : 'overlayAdjust'}>
        <div className="top">
          <LargeSearch collection={this.props.collection}/>
        </div>
        <Map/>
      </div>
    </div>
    );
  }
}

export default SearchPage;
