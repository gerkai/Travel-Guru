import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class App extends Component {
  static defaultProps = {
    center: {
      lat: 21.45,
      lng: 91.96,
    },
    zoom: 11,
  };

  render() {
    return (
      <section className="  row col-12">
        <div className="col-6">
          <h2>Cox's Bazar hotel.</h2>
          <img className = 'col-8' src={"https://i.ibb.co/pxyCwvG/room-1.png" } alt=""/>
          <img className = 'col-8' src={"https://i.ibb.co/TqqFDW7/room-2.png" } alt=""/>
        </div>
        <div className="col-6" style={{ height: "100vh", width: " 100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyD2bKls4Lxjq7E5RncRq47joLG-5o5wD8c",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={21.45388}
              lng={91.96765}
              text=" Cox's bazar Marker"
            />
          </GoogleMapReact>
        </div>
      </section>
    );
  }
}

export default App;
