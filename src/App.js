import logo from './logo.svg';
import './App.css';
import SimpleForm from './forms/Form';
import { useState } from 'react';
import PriceForm from './forms/PriceForm';

function App() {
  const [totalSquares, setTotalSquares] = useState(0);
  const [fieldSquares, setFieldSquares] = useState(0);
  const [costPerRSqFt, setCostPerRSqFt] = useState('');
  const [linearFeet, setLinearFeet] = useState('');
  const [wasteFactor, setWasteFactor] = useState('');
  const [squareFeet, setSquareFeet] = useState('');
  const [totalArea, setTotalArea] = useState(null);
  const [totalCost, setTotalCost] = useState(null);
  const [roofingSquares, setRoofingSquares] = useState(null);
  const [bundleCount, setBundleCount] = useState(null);
  const [starterBundles, setStarterBundles] = useState(null);
  const [HRBundles, setHRBundles] = useState(null);
  const [HRsquares, setHRSquares] = useState(null);
  const [starterSquares, setStarterSquares] = useState(null);

  const handleCalculate = () => {
    const wasteCalc = ((wasteFactor / 100) * fieldSquares)
    const roofingSquares = parseFloat(starterSquares) + parseFloat(HRsquares) + parseFloat(fieldSquares) + parseFloat(wasteCalc) ;
    console.log(roofingSquares);
    const cost = roofingSquares * parseFloat(costPerRSqFt);
    setRoofingSquares(roofingSquares);
    setTotalCost(cost);
  };

  const handleLinearFeetCalculate = () => {
    const shingleWidth = 1.29167; // in feet (15.5 inches)
    const shingleLength = 3.28125; // in feet (39.375 inches)
    const areaPerShingle = shingleWidth * shingleLength; // square feet per shingle
    const linearFeetVal = parseFloat(linearFeet);
    const totalArea = linearFeetVal * shingleWidth;
    const squares = totalArea / 100;
    setTotalSquares(squares);
    setBundleCount(squares/3)
  };
  const handleSquareFeetCalculate = () => {
    const shingleWidth = 1.29167; // in feet (15.5 inches)
    const linearFeetVal = parseFloat(linearFeet);
    setTotalArea(linearFeetVal * shingleWidth);
    const squares = totalArea / 100;
    setTotalArea(squares);
    setBundleCount(squares/3)
  };
  return (
    <div className="App">
      {/* <SimpleForm totalSquares={totalSquares} setTotalSquares={setTotalSquares}/> */}
      {/* <PriceForm totalSquares={totalSquares}/> */}
          <div className="App">
      <h1>Roofing Estimator</h1>
      <div className="input-group">
        <label>
          Starter (sq):
          <input 
            type="number" 
            value={starterSquares}
            onChange={e => setStarterSquares(e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Hip and Ridge (sq):
          <input 
            type="number" 
            value={HRsquares}
            onChange={e => setHRSquares(e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Field Shingles (sq):
          <input 
            type="number" 
            value={fieldSquares}
            onChange={e => setFieldSquares(e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Waste Factor (%):
          <input 
            type="number" 
            value={wasteFactor}
            onChange={e => setWasteFactor(e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Cost per Sq Ft:
          <input 
            type="number" 
            value={costPerRSqFt}
            onChange={e => setCostPerRSqFt(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {roofingSquares !== null && (
        <div className="output-group">
          <p>Total Area: {roofingSquares.toFixed(2)} sq ft</p>
          <p>Total Cost: ${totalCost.toFixed(2)}</p>
        </div>
      )}
      <hr />
      <div className="input-group">
        <label>
          Linear Feet:
          <input 
            type="number" 
            value={linearFeet}
            onChange={e => setLinearFeet(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleLinearFeetCalculate}>Convert to Squares</button>
      {totalSquares !== null && (
        <div className="output-group">
          <p>Total Squares: {totalSquares.toFixed(2)}</p>
        </div>
      )}
      {bundleCount !== null && (
        <div className="output-group">
          <p>Bundle Count: {bundleCount.toFixed(2)}</p>
        </div>
      )}

      <div className="input-group">
        <label>
          Square Feet:
          <input 
            type="number" 
            value={squareFeet}
            onChange={e => setSquareFeet(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleSquareFeetCalculate}>Convert to Squares</button>
      {totalArea !== null && (
        <div className="output-group">
          <p>Total Squares: {totalArea.toFixed(2)}</p>
        </div>
      )}
      {bundleCount !== null && (
        <div className="output-group">
          <p>Bundle Count: {bundleCount.toFixed(2)}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
