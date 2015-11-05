import React from 'react';

import Splash from './Splash.jsx';
import SearchPage from './SearchPage.jsx';
import ResultsPage from './ResultsPage.jsx';

import Header from './Header.jsx';
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
        currentView = <SearchPage/>;
        break;
      case 'results' :
        currentView = <ResultsPage/>;
        break;
      default :
        currentView = <Splash/>;
    };

    return (
      <div>
        <Header/>
        {currentView}
        <Footer/>
      </div>
    );
  }
}

export default App;
