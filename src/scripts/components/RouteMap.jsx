import React from 'react';

class RouteMap extends React.Component {
  initMap() {

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newPos = {
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
          scrollWheel: false,
          center: new google.maps.LatLng(newPos),
          zoom: 14,
          mapTypeControl: false,
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        };

        let newMap = new google.maps.Map(this.refs.routeMap, mapOptions);

        newMap.mapTypes.set(customMapTypeId, customMapType);
        newMap.setMapTypeId(customMapTypeId);

        let pinMarker = new google.maps.Marker({
          icon: './images/pin2_orange.png'
        });

        let directionsDisplay = new google.maps.DirectionsRenderer({
          map: newMap,
          options: {
            markerOptions: {
              // icon: './images/locationDark.png'
            },
            polylineOptions: {
              strokeColor: '#006839',
              strokeWeight: 6,
              strokeOpacity: 0.5
            }
          }
        });

        let request = {
          destination: {lat: 27.4944960, lng: -82.6008596},
          origin: newPos,
          travelMode: google.maps.TravelMode.DRIVING
        };

        let directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            // Display the route on the map.
            directionsDisplay.setDirections(response);
          }
        });
      });
    };
  }

  componentDidMount() {
    this.initMap();
  }

  render() {
    return (
      <div>
        <div className="routeMap" ref="routeMap"></div>
      </div>
    );
  }
}

export default RouteMap;
