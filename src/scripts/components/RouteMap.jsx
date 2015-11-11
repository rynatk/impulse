import React from 'react';

class RouteMap extends React.Component {

  constructor(props) {
    super(props);
  }

  initMap() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {

        let myPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        let destPos = {
          lat: this.props.geolocation.latitude,
          lng: this.props.geolocation.longitude
        }

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
          center: new google.maps.LatLng(myPos),
          zoom: 14,
          mapTypeControl: false,
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        };

        let newMap = new google.maps.Map(this.refs.routeMap, mapOptions);

        newMap.mapTypes.set(customMapTypeId, customMapType);
        newMap.setMapTypeId(customMapTypeId);
        newMap.setOptions({'scrollwheel': false});

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
              strokeColor: '#008549',
              strokeWeight: 6,
              strokeOpacity: 1.0
            }
          }
        });

        let request = {
          destination: destPos,
          origin: myPos,
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
      <div className="routeContainer">
        <i className="fa fa-cog fa-spin fa-3x" id="loading2"></i>
        <div className="routeMap" ref="routeMap"></div>
      </div>
    );
  }
}

export default RouteMap;
