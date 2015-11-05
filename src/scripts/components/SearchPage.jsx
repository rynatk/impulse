import React from 'react';

import Overlay from './Overlay.jsx';
import LargeSearch from './LargeSearch.jsx';
import Map from './Map.jsx';

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
      <div className={ this.state.revealed ? 'overlayUnAdjust' : 'overlayAdjust'}>
        <LargeSearch/>
        <Map/>
      </div>
    </div>
    );
  }
}

export default SearchPage;
