import React from 'react';

class LargeSearch extends React.Component {
  render() {
    return (
    <div>
      <form className="searchForm">
        <input type="search" className="search" placeholder="" required></input>
        <input type="button" className="button" value="search"></input>
      </form>
    </div>
    );
  }
}

export default LargeSearch;
