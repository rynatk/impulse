import React from 'react';

class Map extends React.Component {
  initMap() {
    let customMapType = new google.maps.StyledMapType([
      {
        stylers: [
          {hue: '#00A95C'},
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
        stylers: [{color: '#F54100'}]
      }
    ], {
      name: 'Impulse Styling'
    });
    let customMapTypeId = 'impulse_style';

    let mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 15,
      mapTypeControl: false,
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
    let newMap = new google.maps.Map(this.refs.map, mapOptions);

    newMap.mapTypes.set(customMapTypeId, customMapType);
    newMap.setMapTypeId(customMapTypeId);

    let infoWindow = new google.maps.InfoWindow({map: newMap});

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('You are here!');
        newMap.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, newMap.getCenter());
      });
    } else {
      handleLocationError(false, infoWindow, newMap.getCenter());
    }
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
  }

  componentDidMount() {
    this.initMap();
  }

  render() {
    return (
      <div>
        <div id="map" ref="map"></div>
      </div>
    );
  }
}

export default Map;
