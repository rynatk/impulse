import React from 'react';

class Map extends React.Component {

  initMap() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let myPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        let customMapType = new google.maps.StyledMapType([
          {
            stylers: [
              {hue: '#972900'},
              {visibility: 'simplified'},
              {gamma: 0.5},
              {weight: 0.5}
            ]
          },
          {
            elementType: 'labels',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: 'water',
            stylers: [{color: '#FF8B60'}]
          }
        ], {
          name: 'Impulse Styling'
        });
        let customMapTypeId = 'impulse_style';

        let mapOptions = {
          center: new google.maps.LatLng(myPos),
          zoom: 15,
          mapTypeControl: false,
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        };

        let newMap = new google.maps.Map(this.refs.routeMap, mapOptions);

        let newMarker = new google.maps.Marker({
          position: myPos,
          map: newMap,
          title: "BouncingLocation",
          animation: google.maps.Animation.BOUNCE
        });

        newMap.mapTypes.set(customMapTypeId, customMapType);
        newMap.setMapTypeId(customMapTypeId);
        newMap.setOptions({'scrollwheel': false});
      });
    };
  }

  componentDidMount() {
    this.initMap();
  }

  render() {
    return (
      <div>
        <i className="fa fa-cog fa-spin fa-3x" id="loading1"></i>
        <div className="map" ref="routeMap"></div>
      </div>
    );
  }
}

export default Map;
