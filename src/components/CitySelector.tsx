import React, { useState } from "react";
import Select from "react-select";
import cityData from "../data/cities.json";

// The JSON file is an array of objects with at least name and country fields
const makeOption = (city) => ({
  value: city.name,
  label: `${city.name}, ${city.country}`,
});

const CitySelector = ({ value, onChange }) => {
  const [input, setInput] = useState("");

  let filteredOptions = cityData
    .filter((city) =>
      city.name.toLowerCase().startsWith(input.toLowerCase())
    )
    .slice(0, 50)
    .map(makeOption);

  // Always include the selected value in the options
  if (
    value &&
    !filteredOptions.some((opt) => opt.value === value.value)
  ) {
    filteredOptions = [value, ...filteredOptions];
  }

  return (
    <Select
      options={filteredOptions}
      value={value}
      onChange={onChange}
      onInputChange={(val) => setInput(val)}
      placeholder="Type your city..."
      isSearchable
      isClearable
      styles={{
        menu: (provided) => ({ ...provided, zIndex: 9999 }),
        option: (provided, state) => ({
          ...provided,
          color: 'black',
          backgroundColor: state.isFocused ? '#f0f0f0' : 'white',
        }),
        singleValue: (provided) => ({
          ...provided,
          color: 'black',
        }),
        input: (provided) => ({
          ...provided,
          color: 'black',
        }),
      }}
      noOptionsMessage={() =>
        input.length < 1
          ? "Start typing to search cities..."
          : "No cities found"
      }
    />
  );
};

export default CitySelector; 