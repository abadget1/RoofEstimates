// SimpleForm.js
import React, { useState } from 'react';

const PriceForm = ({totalSquares}) => {
  // State to manage the form data
  const [formData, setFormData] = useState({
    inputValue: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., send it to a server
    console.log('Form submitted with data:', formData);
  };

  return (
  
  <>
    <form onSubmit={handleSubmit}>
      <label>
        Price/Sq:
        <input
          type="text"
          name="inputValue"
          value={formData.inputValue}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Total Squares:
        <input
          type="text"
          name="inputValue"
          value={formData.inputValue}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>

    <div>
    <label>
        Price:
        {totalSquares}
      </label>
    </div>
    </>
  );
};

export default PriceForm;
