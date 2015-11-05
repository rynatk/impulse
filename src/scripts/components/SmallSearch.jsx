import React from 'react';

class SmallSearch extends React.Component {
  render() {
  return (
    <div>
      <section className="container2">
        <form className="search2" method="post" action="index.html">
          <input type="search" name="q" placeholder="Search..." autoComplete="off" />
        </form>
      </section>
    </div>
  )
  }
};

export default SmallSearch;
