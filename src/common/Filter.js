import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Filter = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prevSelected) => {
      const newSelected = prevSelected.includes(category)
        ? prevSelected.filter((cat) => cat !== category)
        : [...prevSelected, category];

      onFilterChange({ categories: newSelected });
      return newSelected;
    });
  };

  const handleClearAll = () => {
    setSelectedCategories([]);
    onFilterChange({ categories: [] });
  };

  const categoryButtons = [
    { name: "Men", value: "men's clothing" },
    { name: "Women", value: "women's clothing" },
    { name: "Electronics", value: "electronics" },
    { name: "Jewellery", value: "jewelery" },
  ];

  return (
    <div className="border rounded p-3 bg-light shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Filter</h5>
        <button className="btn btn-primary btn-sm" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
      <div className="d-flex flex-column">
        <h6 className="mb-3">Categories</h6>
        {categoryButtons.map((button) => (
          <div
            key={button.value}
            className={`d-flex align-items-center mb-2 p-2 rounded cursor-pointer ${
              selectedCategories.includes(button.value)
                ? "bg-primary text-white"
                : ""
            }`}
            onClick={() => handleCheckboxChange(button.value)}
          >
            <input
              type="checkbox"
              id={button.value}
              checked={selectedCategories.includes(button.value)}
              readOnly
              className="me-2"
            />
            <label htmlFor={button.value} className="mb-0">
              {button.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
