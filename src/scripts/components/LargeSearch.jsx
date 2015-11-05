import React from 'react';

class LargeSearch extends React.Component {
  render() {
    return (
      <section className="container">
        <form className="search" method="post" action="index.html">
          <input type="search" name="q" placeholder="Search..." autoComplete="off" />
          <ul className="search-ac">
            <li><a href="#results/Beats">Beats Headphones by Dre<br/><span>Description...</span></a></li>
            <li><a href="#results/Tropicana">Tropicana Orange Juice<br/><span>Description...</span></a></li>
            <li><a href="#results/Hepa">HEPA Premium Home Air...<br/><span>Description...</span></a></li>
            <li><a href="#results/Sombrero">Sombrero Party Hat<br/><span>Description...</span></a></li>
          </ul>
        </form>
      </section>
    );
  }
}

export default LargeSearch;
