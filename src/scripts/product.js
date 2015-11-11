import Backbone from 'backbone';

export class Product extends Backbone.Model {
}

export class Products extends Backbone.Collection {
    get url() {
      return '/productData.json';
    }

    get model() {
      return Product;
    }
}
