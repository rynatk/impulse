import React from 'react';

class Overlay extends React.Component {
  render() {
    return (
      <div>
        <div className="overlay">
          <div className="overlayTop">
            <h1 className="overlayLogo">
              impulse
            </h1>
            <div className="chevronBlock">
              <i className="fa fa-chevron-circle-down fa-5x" id="chevron"></i>
            </div>
          </div>
          <div className="overlayBottom">
          </div>
        </div>
      </div>
    );
  }
}

export default Overlay;
