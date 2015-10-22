import Backbone from 'backbone';

class Router extends Backbone.Router {
  get routes() {
    return {
      '' : 'splash'
    }
  }

  splash() {
    this.current = 'splash';
  }
}

export default Router;
