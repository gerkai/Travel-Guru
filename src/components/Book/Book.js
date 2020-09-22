import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import somePlaces from '../../StoreData/SomePlaces';

const Book = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const {placeTypeName} = useParams();
    // console.log(placeTypeName);

   const {placeName,description} = somePlaces.find(plc => plc.placeName === placeTypeName );
    // console.log(placeName);
    const history = useHistory();
    const bookButton = ()=> {
        history.push("/hotel");

            console.log("book button clicked");
    }

    return (
        <div >
           <div className = "col-6">
            <h2>{placeName}</h2>
            <h5>{description}</h5>
            <button onClick= {bookButton} >Book</button>
           </div>
        </div>
    );
};

export default Book;
