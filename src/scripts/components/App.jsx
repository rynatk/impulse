import React from 'react';

import Splash from './Splash.jsx';
import SearchPage from './SearchPage.jsx';
import ResultsPage from './ResultsPage.jsx';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

import {Products} from '../product.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentRoute: props.router.current
    }
  }

  get products() {
    return new Products();
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
        currentView = <SearchPage collection={this.products} />;
        break;
      case 'results' :
        currentView = <ResultsPage query={this.props.router.query} collection={this.products} />;
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
