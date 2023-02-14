import React from 'react';
import PropTypes from 'prop-types';

function NewUnit({ handleSubmit }) {
    return (

        <form onSubmit={() => handleSubmit()}>
            <header><h3>Add new Rental Unit</h3></header>

            <label>Title
                <input name="title" id="title" type="text"></input>
            </label>
            <br/>
            <label>HouseType
            <input name="houseType" id="houseType" type="text"></input>
            </label>
            <br/>
            <label>image
                <input name="image" id="image" type="text"></input>
            </label>
            <br/>
            <label>City
                <input id="city" name="city" type="text"></input>
            </label>
            <br/>
            <label>Country
                <input id="country" name="country" type="text"></input>
            </label>
            <br/>
            <label>Cost
                <input id="cost" name="cost" type="text"></input>
            </label>
            <br/>
            <label>Description
                <input id="description" name="description" type="text"></input>
            </label>
            <br/>
            <label>HostName
                <input id="name" name="name" type="text"></input>
            </label>
            <br/>
            <label>isSuperhost
                <input id="isSuperhost" name="isSuperhost" type="text"></input>
            </label>
            <br/>
            <label>RatingStars
                <input id="stars" name="stars" type="text"></input>
            </label>
            <br/>
            <label>Reviews
                <input id="reviews" name="reviews" type="text"></input></label>
                <br/>

            <button type="submit">Add Property</button>
        </form>
    )
}

NewUnit.propTypes ={
    handleSubmit: PropTypes.func.isRequired  
}

export default NewUnit;