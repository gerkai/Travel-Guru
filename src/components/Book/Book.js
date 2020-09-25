import React from "react";
import { useHistory, useParams } from "react-router-dom";
import somePlaces from "../../StoreData/SomePlaces";
import Header from "../Header/Header";
import "./Book.css";

import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
const Book = () => {
  const { placeTypeName } = useParams();
  const { placeName, description } = somePlaces.find(
    (plc) => plc.placeName === placeTypeName
  );
  const history = useHistory();
  const bookButton = () => {
    history.push("/hotel");
  };

  return (
    <div className="bookStyle row">
      <Header />
      <div className="col-5 centeredly">
        <h2 className="text-center">{placeName}</h2>
        <h5>{description}</h5>
      </div>

      <div className="col-7 centeredly">
        <DayPicker numberOfMonths={2} pagedNavigation fixedWeeks />;
        <br />
        <button className=" btn btn-secondary" onClick={bookButton}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Book;
