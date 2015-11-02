import React from 'react';

import Splash from './Splash.jsx';
import Search from './Search.jsx';
import Results from './Results.jsx';

import Footer from './Footer.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentRoute: props.router.current
    }
  }

  componentWillMount() {
    this.props.router.on('route', this.onRoute);
  }

  componentWillUnmount() {
    this.props.router.off('route', this.onRoute);
  }

  onRoute = () => {
    this.setState({
      currentRoute: this.props.router.current
    });
  }

  render() {
    let currentView;

    switch(this.state.currentRoute) {
      case 'splash' :
        currentView = <Splash/>;
        break;
      case 'search' :
        currentView = <Search/>;
        break;
      case 'results' :
        currentView = <Results/>;
        break;
      default :
        currentView = <Splash/>;
    };

    return (
      <div>
        {currentView}
        <Footer/>
      </div>
    );
  }
}

export default App;
