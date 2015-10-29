import Backbone from 'backbone';

class Router extends Backbone.Router {
  get routes() {
    return {
      '' : 'splash',
      'search' : 'search',
      'result' : 'result'
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

  result() {
    console.log('routed to "result"!');
    this.current = 'result';
  }

  initialize() {
    Backbone.history.start();
  }
}

export default Router;
