import React from 'react';

const ChoiceDropdown = () => {
    const types = {
        "food": "Food",
        "drink": "Drink",
        "toys": "Toys",
        "technology": "Technology",
        "sports": "Sports",
        "clothing": "Clothing",
        "footwear": "Footwear",
        "household": "Household",
        "homeware": "Homeware",
        "jewellery": "Jewellery",
        "diy": "DIY",
        "accessories": "Accessories",
        "other": "Other"
    };
  return (
    <>
      {Object.keys(types).map((item) => (
          <option value={item} key={item}>{types[item]}</option>
          ))}
    </>
    
  )
}

export default ChoiceDropdown