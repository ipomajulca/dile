import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

class App extends Component {
  constructor(props) {
    super(props);
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaXBvbWFqdWxjYSIsImEiOiJja2FzdGpzODcwNHNtMzBwaHVjM2lrYmN6In0.g4bNxSg91fcNoGqh47zYuw";
    this.state = {
      stores: [],
      lng: -74.1123,
      lat: 40.4,
      zoom: 11,
      map: null,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    fetch("/stores")
      .then((res) => res.json())
      .then((stores) => {
        this.setState({
          stores,
        });
        for (let item in stores) {
          new mapboxgl.Marker()
            .setLngLat([stores[item].lng, stores[item].lat])
            .addTo(map);
        }
      });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }

  render() {
    return (
      <div>
        {/* <h1> Stores </h1>
        <ul>
  
          {this.state.stores.map((store) => (
            <li key={store._id}> {store.name} </li>
          ))}
        </ul> */}
{/*         <div className="sidebarStyle"></div> */}  
      <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}
export default App;
