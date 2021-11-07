import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  { Link } from '@reach/router';

const BarDetails = (props) => {
    const {id} = props;
    const [bars, setBars] = useState({});
    const [bar, setBar] = useState({});

    useEffect(()=> {
        axios
            .get(`http://localhost:8000/api/bars/${id}`)
            .then((response)=> {
                console.log(response);
                console.log(response.data);
                setBars(response.data);
            })
            .catch((err)=> {
                console.log(err);
            })
    }, [id]);

    return(
        <div>
            <div className="navBar">
                <h1>Drink Up</h1> <img class="appImage" src="https://www.clipartmax.com/png/full/187-1876508_cocktail-juice-pink-lady-clip-art-pink-cocktail-icon.png" alt="" />
                <br />
                <h4>Find your local watering hole</h4>
                <br />
                <Link to="/" class="btn btn-primary">Home</Link>
                <hr />
                <h2>{bars.barName}</h2>
            </div>
            <div className="body">
                <div >
                    <img className="barImage2" src={bars.imageURL} alt="" />
                </div>
                <div className="barInfo">
                    <h1 className="aboutHeader">About</h1>
                    <br />
                    <h3 className="aboutText">Address</h3>
                    <h5>{bars.addressStreet}</h5>
                    <h5>{bars.addressCity}</h5>
                    <h3 className="aboutText">Bar Type</h3>
                    <h5>{bars.barType}</h5>
                    <h3 className="aboutText">Ambience</h3>
                    <h5>{bars.ambience}</h5>
                    <h3 className="aboutText"> Takes Reservations? {bars.reservations? <h5>Yes</h5> : <h5>No</h5> }</h3>
                    <h3 className="aboutText">Allows Kids? {bars.allowsKids? <h5>Yes</h5> : <h5>No</h5> }</h3>
                </div>
            </div>
        </div>
    );
};

export default BarDetails;

