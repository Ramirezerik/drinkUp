import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate} from '@reach/router';

const barTypeOptions= ["Standard Bar", "Cocktail Lounge", "Brewery", "Winery"];
const ambienceOptions= ["Casual", "Intimate","Good for Groups", "Classy", "Dancing"];

const NewBar = (props) => {
    const [errors, setErrors] = useState({});
    const [barName, setBarName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [addressStreet, setAddressStreet] = useState("");
    const [addressCity, setAddressCity] = useState("");
    const [barType, setBarType] = useState("");
    const [ambience, setAmbience] = useState("");
    const [reservations, setReservations] = useState(true);
    const [allowsKids, setAllowsKids] = useState(true);


    const newSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/bars', {
                barName,
                imageURL,
                addressStreet,
                addressCity,
                barType,
                ambience,
                reservations,
                allowsKids,
            })
            .then((response) => {
                console.log(response.data);
                navigate('/');
            })
            .catch((err)=> {
                console.log(err.response);
                setErrors(err.response.data.errors);
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
                <h3>Add a Bar</h3>
            </div>
            <div className="body">
                <form onSubmit={newSubmitHandler}>
                    <p className="form-group">
                        Bar Name:
                        <input 
                            type="text" 
                            onChange={(e)=> setBarName(e.target.value)}
                            value= {barName}
                        />
                    </p>
                    <p className="form-group">
                        Image URL:
                        <input 
                            type="text"
                            onChange={(e)=> setImageURL(e.target.value)}
                            value={imageURL}
                        />
                    </p>
                    <p className="form-group">
                        Street:
                        <input 
                            type="text"
                            onChange={(e) => setAddressStreet(e.target.value)}
                            value={addressStreet}
                        />
                    </p>
                    <p className="form-group">
                        City, State, Zip:
                        <input 
                            type="text"
                            onChange={(e) => setAddressCity(e.target.value)}
                            value={addressCity}
                        />
                    </p>
                    <p className="form-group">
                        Bar Type:
                        <select 
                            onChange={(e)=> setBarType(e.target.value)}
                            value={barType}
                        >
                            <option>      </option>
                            <option value="Standard Bar">Standard Bar</option>
                            <option value="Cocktail Lounge">Cocktail Lounge</option>
                            <option value="Brewery">Brewery</option>
                            <option value="Winery">Winery</option>
                        </select>
                    </p>
                    <p className="form-group">
                        Ambience:
                        <select 
                            onChange={(e)=> setAmbience(e.target.value)}
                            value={ambience}
                        >
                            <option>      </option>
                            <option value="Casual">Casual</option>
                            <option value="Intimate">Intimate</option>
                            <option value="Good for Groups">Good for Groups</option>
                            <option value="Classy">Classy</option>
                            <option value="Dancing">Dancing</option>
                        </select>
                    </p>
                    <p className="form-group">
                        Takes Reservations: 
                            <input type="checkbox" 
                            onChange={()=>setReservations(!reservations)} 
                            readOnly
                            checked={reservations}
                            />
                    </p>
                    <p className="form-group">
                        Allows Kids: 
                            <input type="checkbox" 
                            onChange={()=>setAllowsKids(!allowsKids)} 
                            readOnly
                            checked={allowsKids}
                            />
                    </p>
                    <button class="btn btn-success">
                        Add Bar
                    </button>
                </form>
                {errors &&
                Object.keys(errors).map((objKey, index) => (
                <p key={index} className="error-text">{errors[objKey].message}</p>
                ))}
            </div>
        </div>
    );
};

export default NewBar;

