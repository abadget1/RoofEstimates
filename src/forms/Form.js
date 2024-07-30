// SimpleForm.js
import React, { useState } from 'react';

const SimpleForm = () => {
  // State to manage the form data
  const [formData, setFormData] = useState({
    inputValue: '',
  });

  const [starter, setStarter] = useState({
    starter: '',
  });
  const [hipAndRidge, setHipAndRidge] = useState({
    hipAndRidge: '',
  });
  const [shingles, setShingles] = useState({
    shingles: '',
  });
  const [wasteFactor, setWasteFactor] = useState({
    wasteFactor: '',
  });
  const [total, setTotal] = useState({
    shingle_total: '',
  });
  
  const [price, setPrice] = useState({
    price: '',
  })

  const [totalCost, setTotalCost] = useState({
    totalCost: 0,
  });


  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  };
  const handleStarterChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...starter,
      [name]: value,
    });
    console.log(starter)
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    console.log('Form submitted with data:', formData);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Starter/perimeter:
        <input
          type="text"
          name="inputValue"
          value={starter.inputValue}
          onChange={handleStarterChange}
        />
      </label>
      <label>
        Hip and Ridge:
        <input
          type="text"
          name="inputValue"
          value={hipAndRidge.inputValue}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Shingles:
        <input
          type="text"
          name="inputValue"
          value={shingles.inputValue}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Waste factor (%):
        <input
          type="text"
          name="inputValue"
          value={wasteFactor.inputValue}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Price/Sq:
        <input
          type="text"
          name="inputValue"
          value={price.setPrice}
          onChange={handleInputChange}
        />
      </label>
      {/* <label>
        Total Squares:
        <input
          type="text"
          name="inputValue"
          value={formData.inputValue}
          onChange={handleInputChange}
        />
      </label> */}

      <button type="submit">Submit</button>
    </form>

<div>
<label>
    Price:
    {totalCost.totalCost}
  </label>
</div>
</>
  );
};

export default SimpleForm;
