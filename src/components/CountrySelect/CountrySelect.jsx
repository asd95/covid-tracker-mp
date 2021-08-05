import React from "react";

const CountrySelect = ({ countries, getCountry }) => {
  const selectOptions = countries.map((country) => {
    return (
      <option key={country.ID} value={country.ID}>
        {country.Country}
      </option>
    );
  });

  const change = (e) => {
    const country = countries.find((country) => country.ID === e.target.value);
    getCountry(country);
  };
  return (
    <div>
      <select
        onChange={change}
        className="form-select block w-full border p-3 rounded my-5"
      >
        <option value="0" key="0">
          Select Country
        </option>
        {selectOptions}
      </select>
    </div>
  );
};

export default CountrySelect;
