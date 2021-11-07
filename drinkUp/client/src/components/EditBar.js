import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import BarDetails from './BarDetails';
// import NewBar from './NewBar';
// import AllBars from './AllBars';

const EditBar = (props) => {
    const {id} = props;
    const [updateName, setUpdateName] = useState("");
    const [updateimageURL, setUpdateImageURL] = useState("");
    const [updateStreet, setUpdateStreet] = useState("");
    const [updateCity, setUpdateCity] = useState("");
    const [updateType, setUpdateType] = useState("");
    const [updateAmbience, setUpdateAmbience] = useState("");
    const [updateReservations, setUpdateReservations] = useState("");
    const [updateAllowsKids, setUpdateAllowsKids] = useState("");

    useEffect(()=> {
        axios
            .get(`http://localhost:8000/api/bars/${id}`)
            .then((response)=> {
                console.log(response.data);
                setUpdateName(response.data.barName);
                setUpdateImageURL(response.data.imageURL);
                setUpdateStreet(response.data.addressStreet);
                setUpdateCity(response.data.addressCity);
                setUpdateType(response.data.barType);
                setUpdateAmbience(response.data.ambience);
                setUpdateReservations(response.data.reservations);
                setUpdateAllowsKids(response.data.allowsKids);
            })
            .catch((err)=> {
                console.log(err);
                navigate("/error");
            })
    }, [id]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/bars/${id}`, {
                barName: updateName,
                imageURL: updateimageURL,
                addressStreet: updateStreet,
                addressCity: updateCity,
                barType: updateType,
                ambience: updateAmbience,
                reservations: updateReservations,
                allowsKids: updateAllowsKids
            })
            .then((response)=> {
                console.log(response.data);
                navigate("/");
            })
            .catch((err)=> {
                console.log(err.response);
            });
    };

    return(
        <div>
            <div className="navBar">
                <h1>Drink Up</h1> <img class="appImage" src="https://www.clipartmax.com/png/full/187-1876508_cocktail-juice-pink-lady-clip-art-pink-cocktail-icon.png" alt="" />
                <br />
                <h4>Find your local watering hole</h4>
                <br />
                <Link to= "/" class="btn btn-primary">Home</Link>
                <br />
                <br />
                <h3>Edit Bar Details</h3>
            </div>
            <div className="body">
                <form onSubmit={onSubmitHandler}>
                    <label>Bar Name:</label>
                    <input 
                        className="form-group"
                        type="text"
                        onChange={(e)=> setUpdateName(e.target.value)}
                        value={updateName}
                    />
                    <br />
                    <label>Bar Image:</label>
                    <input 
                        className="form-group"
                        type="text"
                        onChange={(e)=> setUpdateImageURL(e.target.value)}
                        value={updateimageURL}
                    />
                    <br />
                    <label>Street:</label>
                    <input 
                        className="form-group"
                        type="text"
                        onChange={(e)=> setUpdateStreet(e.target.value)}
                        value={updateStreet}
                    />
                    <br />
                    <label> City:</label>
                    <input 
                        className="form-group"
                        type="text"
                        onChange={(e)=> setUpdateCity(e.target.value)}
                        value={updateCity}
                    />
                    <br />
                    <label> Bar Type:</label>
                    <select
                        className="form-group"
                        onChange={(e)=> setUpdateType(e.target.value)}
                        value={updateType}
                    >
                            <option>      </option>
                            <option value="Standard Bar">Standard Bar</option>
                            <option value="Cocktail Lounge">Cocktail Lounge</option>
                            <option value="Brewery">Brewery</option>
                            <option value="Winery">Winery</option>
                    </select>
                    <br />
                    <label> Ambience:</label>
                    <select 
                        className="form-group"
                        type="text"
                        onChange={(e)=> setUpdateAmbience(e.target.value)}
                        value={updateAmbience}
                    >
                            <option>      </option>
                            <option value="Casual">Casual</option>
                            <option value="Intimate">Intimate</option>
                            <option value="Good for Groups">Good for Groups</option>
                            <option value="Classy">Classy</option>
                            <option value="Dancing">Dancing</option>
                    </select>
                    <br />
                    <label> Takes Reservations:</label>
                    <input 
                        className="form-group"
                        type="checkbox"
                        onChange={(e)=> setUpdateReservations(e.target.value)}
                        checked={updateReservations}
                        readOnly
                    />
                    <br />
                    <label> Allows Kids:</label>
                    <input 
                        className="form-group"
                        type="checkbox"
                        onChange={(e)=> setUpdateAllowsKids(e.target.value)}
                        checked={updateAllowsKids}
                        readOnly
                    />
                    <br />
                    <button class="btn btn-warning">
                        Edit Bar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditBar;