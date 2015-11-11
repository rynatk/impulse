import Backbone from 'backbone';

class Router extends Backbone.Router {
  get routes() {
    return {
      '' : 'search',
      'results/:key' : 'results',
      'splash' : 'splash'
    }
  }

  splash() {
    this.current = 'splash';
  }

  search() {
    this.current = 'search';
  }

  results(key) {
    this.query = key;
    this.current = 'results';
  }

  initialize() {
    Backbone.history.start();
  }
}

export default Router;
