import React, { useState } from "react";
import somePlaces from "../../StoreData/SomePlaces";
import Header from "../Header/Header";
import Place from "../Place/Place";
import "./Home.css";

const Home = () => {
  const [places, setPlaces] = useState(somePlaces);

  const style = {
    display: "flex",
    margin: "50px",
    // justifyContent: 'space-between',
  };

  return (
    <section className="homeStyle col-12 ">
      <Header></Header>
      <div style={style}>
        <div className="coxPart col-5">
          <h1>Cox's Bazar</h1>
          <h6>
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it is infamous for the largest refugee
            camp in the world. ...
          </h6>
          <br />
          {/* <button className=''>Booking-></button> */}
        </div>
        <div className = 'col-12'>
        {places.map((place) => (
          <Place key={place.bedType} place={place}></Place>
        ))}
        </div>
      </div>
    </section>
  );
};
export default Home;
