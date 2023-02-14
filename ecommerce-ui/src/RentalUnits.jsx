import React from 'react';
import PropTypes from 'prop-types';
function RentalUnits({ bnbData, addNewUnit}) {
  const retailUnits = bnbData.map((bnb, idx) => {
    return <div className="RentalUnit" key={idx}>
      <h2>{bnb.title}</h2>
      <img className="bnb-img" src={bnb.image} alt="alt here" />
      <input className="button" type="button" value="Add" id={idx} onClick={() => addNewUnit(bnb.title, bnb.payment.cost)} />
      <p>{bnb.location.city}, {bnb.location.country}</p>
      <p>$ {bnb.payment.cost} {bnb.payment.description} </p>
      <p>Host: {bnb.host.name} <br />{bnb.host.isSuperhost ? <span>SuperHost</span> : <span> </span>}</p>
      <p>Stars: {bnb.rating.stars}/5, Reviews: {bnb.rating.reviews}</p>
    </div>
  })
  return (
    <>
      {retailUnits}
    </>
  )
}
RentalUnits.propTypes ={
  bnbData: PropTypes.array.isRequired,
  addNewUnit: PropTypes.func.isRequired  
}

export default RentalUnits;