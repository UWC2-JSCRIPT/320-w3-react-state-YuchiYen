import React from 'react';
import PropTypes from 'prop-types';

function Cart({ units, deleteFromUnit, deleteAllUnits }) {

    let sum = 0;
    for (let i = 0; i < units.length; i++) {
        sum += units[i].price
    }

    const unitList = units.map((unit, index) => {
        return (
            <div className="cardItem" key={index} id={`item-${index}`} >
                <div>{unit.title} </div>
                <div>$ {unit.price} </div>
                <div><input className="button" type="button" value="Delete" id={`button-${index}`} onClick={() => { deleteFromUnit(index) }} /></div>
            </div>)
    })
    return (
        <>
            <header><h3>Item in cart</h3></header>
            {unitList}
            {units.length > 0 && (<input className="button" type="button" value="Clear Cart" onClick={() => { deleteAllUnits() }}></input>)}
            <div id="total"> <b>total:$ {sum} </b></div>
        </>
    )
}
Cart.propTypes ={
    units: PropTypes.array.isRequired,
    deleteFromUnit: PropTypes.func.isRequired  ,
    deleteAllUnits: PropTypes.func.isRequired
}


export default Cart  
