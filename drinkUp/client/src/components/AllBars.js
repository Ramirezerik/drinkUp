import React, { useEffect, useState } from 'react';
import { Link, navigate} from '@reach/router';
import axios from 'axios';
import AgeRestriction from "./AgeRestriction";

const AllBars = (props) => {
    const {id}= props;
    const [bars, setBars] = useState({});
    const [barList, setBarList]= useState([]);
    
    useEffect(()=> {
        axios
            .get('http://localhost:8000/api/bars')
            .then((response) => {
                console.log(response);
                console.log(response.data);
                setBarList(response.data);
            })
            .catch((err)=> {
                console.log(err)
            })
    }, [])

    const deleteHandler = (id, index) => {
        console.log("handle delete", id);
        axios
            .delete(`http://localhost:8000/api/bars/${id}`)
            .then((response) => {
                console.log(response);
                const barsCopy = [...bars];
                const filteredArr = barsCopy.filter(
                    (bar, idx) => idx !==index
                );
                setBars(filteredArr);
            })
            .catch((err) => console.log(err));
        };
        
        return(
            <div>
            <div className="navBar">
                <h1>Drink Up</h1> <img class="appImage" src="https://www.clipartmax.com/png/full/187-1876508_cocktail-juice-pink-lady-clip-art-pink-cocktail-icon.png" alt="" />
                <h4>Find your local watering hole</h4>
                <Link to="/new" class="btn btn-success">Add New Bar</Link>
            </div>
            {/* <AgeRestriction/> */}
            <div className="body">
                <table>
                    <thead>
                        <tr>
                        </tr>
                    </thead>
                    <tbody className="barProfile">
                        {
                            barList?
                            barList.map((bar, index)=>(
                                <tr key={index} className="BarRows">
                                    <td>
                                        <img className="barImage" src={bar.imageURL} alt=""/>
                                    </td>
                                    <td>
                                        {bar.barName}
                                    </td>
                                    <td>
                                        {bar.barType}
                                    </td>
                                    <td>
                                    <button id="right-form-btn" onClick={()=> {navigate(`/details/${bar._id}`)}} class="btn btn-info">Bar Details</button>
                                    <button id="right-form-btn" onClick={() =>{navigate(`/edit/${bar._id}`)}} class="btn btn-warning">Edit Bar</button>
                                    <button type="button" id="right-form-btn" onClick={()=> deleteHandler(bar._id, index)} class="btn btn-danger">Out of Business</button>
                                    </td>
                                </tr>
                            ))
                            :null
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AllBars;

//