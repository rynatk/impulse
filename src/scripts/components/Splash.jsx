import React from 'react';

import Header from './Header.jsx';
import Overlay from './Overlay.jsx';

class Splash extends React.Component {
  render() {
    return (
      <div>
        <Overlay/>
        <div className="noScroll">
          <Header/>
          <h1 className="title">impulse</h1>

          <p className="big1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
          <p className="med1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
          <p className="par1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>

        </div>
      </div>
    );
  }
}

export default Splash;
