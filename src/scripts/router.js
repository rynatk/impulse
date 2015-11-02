import Backbone from 'backbone';

class Router extends Backbone.Router {
  get routes() {
    return {
      '' : 'search',
      'results/:id' : 'results',
      'splash' : 'splash'
    }
  }

  splash() {
    console.log('routed to "splash"!');
    this.current = 'splash';
  }

  search() {
    console.log('routed to "search"!');
    this.current = 'search';
  }

  results() {
    console.log('routed to "result"!');
    this.current = 'results';
  }

  initialize() {
    Backbone.history.start();
  }
}

export default Router;
