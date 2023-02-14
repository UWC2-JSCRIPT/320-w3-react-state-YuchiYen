import './App.css';
import React, { useState, useEffect } from 'react';
import RentalUnits from './RentalUnits';
import bnbs from './bnbs.json'
import Cart from './Cart';
import NewUnit from './NewUnit';

function App() {

  //This state handles the shopping cart
  const [units, updateUnit] = useState([]);

  const addNewUnit = (unitTitle, unitPrice) => {
    updateUnit([...units, { title: unitTitle, price: unitPrice }]);
  }

  const deleteFromUnit = (index) => {
    updateUnit([...units.slice(0, index), ...units.slice(index + 1, units.length)])
  }

  const deleteAllUnits = () => {
    updateUnit([])
  }

  //toggle the shopping cart and the new rental unit form
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  }

  //load bnbs.json to the state, so the new rental property can be added to the state
  const [bnbData, setBnbData] = useState([]);

  useEffect(() => {
    setBnbData(bnbs);
  }, []);

  const addNewRentalUnit = () => {
      setNewUnit({ ...bnbData, newUnit });
  }

  const [newUnit, setNewUnit] = useState({});

  const buildRentalProperty = (data) => {
    setNewUnit({
      title: data.get("title"),
      houseType: data.get("houseType"),
      image: data.get("image"),
      location: {
        city: data.get("city"),
        country: data.get("country")
      },
      payment: {
        cost: data.get("cost"),
        description: data.get("description")
      },
      host: {
        name: data.get("name"),
        isSuperhost: data.get("isSuperhost")
      },
      rating: {
        stars: data.get("stars"),
        reviews: data.get("reviews")
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();  
    buildRentalProperty(new FormData(event.target));
    addNewRentalUnit();
  };

  return (
    <div className="App">
      <header>
        <h1>Fake Shopping Site</h1>
      </header>
      <div><input id="showHideButton" type="button" value={showDiv ? " Show Enter New Unit" : "Show Cart"} onClick={() => toggleDiv()}></input></div>
      <div className="App_Container">
        <div className="Left_Container">
          <RentalUnits
            bnbData={bnbData}
            addNewUnit={addNewUnit}
          />
        </div>
        <div className="Right_Container">
          {showDiv ? (
            <Cart units={units}
              deleteFromUnit={deleteFromUnit}
              deleteAllUnits={deleteAllUnits}></Cart>)
            : (<div>
              <NewUnit handleSubmit={handleSubmit}/>
            </div>)}
        </div>

      </div>
    </div>
  );
}

export default App;
