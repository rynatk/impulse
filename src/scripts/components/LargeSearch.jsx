import React from 'react';
import _ from 'underscore';
import Backbone from 'backbone';

class LargeSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentWillMount() {
    this.props.collection.on('sync update', this.handleSearch);
    this.props.collection.fetch();
  }

  handleSearch = () => {
    let query = this.refs.search.value.toLowerCase();
    let collection = this.props.collection;

    if(query){
      this.setState({
        results: _.filter(collection.models, (product) => {
          let name = product.get('product_name').toLowerCase();
          return name.includes(query);
        })
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.results.length > 0) {
      let result = this.state.results[0];
      Backbone.history.navigate(`#results/${result.get('search_key')}`, true);
    }
  }

  render() {
    return (
      <section className="container">
        <form className="search" onSubmit={this.handleSubmit}>
          <input ref="search" type="text" name="q" placeholder="Search..." autoComplete="off" onKeyUp={this.handleSearch} />
          <ul className="search-ac">
            {
              this.state.results.map((result, i) => {
                return <li key={i}><a href={`#results/${result.get('search_key')}`}>{result.get('product_name')}<br/><span>{result.get('store_info.name')}</span></a></li>
              })
            }
          </ul>
        </form>
      </section>
    );
  }
}

export default LargeSearch;
