import React from 'react';

import Overlay from './Overlay.jsx';
import Header from './Header.jsx';
import LargeSearch from './LargeSearch.jsx';
import Map from './Map.jsx';

class Search extends React.Component {
  render() {
    return (
    <div>
      <Header/>
      <LargeSearch/>
      
    </div>
    );
  }
}

export default Search;
