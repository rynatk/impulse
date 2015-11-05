import React from 'react';

import Header from './Header.jsx';
import Overlay from './Overlay.jsx';

class Splash extends React.Component {

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
        <div className={ this.state.revealed ? 'overlayUnAdjust' : 'overlayAdjust' }>

          <h1 className="title">impulse</h1>

          <p className="big1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
          <p className="med1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
          <p className="par1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>

          <p className="big1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
          <p className="med1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
          <p className="par1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>

          <p className="big1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
          <p className="med1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
          <p className="par1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>

          <p className="big1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
          <p className="med1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
          <p className="par1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>

          <p className="big1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
          <p className="med1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
          <p className="par1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>

          <p className="big1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
          <p className="med1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
          <p className="par1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>

          <p className="big1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
          <p className="med1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>
          <p className="par1">Grumpy wizards make toxic brew for the evil Queen and Jack.</p>

        </div>
      </div>
    );
  }
}

export default Splash;
