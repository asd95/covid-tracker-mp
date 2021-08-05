import React from "react";
import Spinner from "../Spinner/Spinner.jsx";
const DataBox = ({
  name,
  additional: { bgColor = "100" } = {},
  newData,
  totalData,
  loading,
}) => {
  const numberWithComm = (x) => {
    return String(x)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className={`shadow-md bg-indigo-${bgColor} p-10 text-center rounded`}>
      <h3 className="text-3xl text-indigo-900 font-bold mb-4">{name}</h3>
      <div className="text-2xl mb-4">
        <span className="font-bold">New: </span>
        {numberWithComm(newData)}
      </div>
      <div className="text-2xl mb-4">
        <span className="font-bold">Total: </span>
        {numberWithComm(totalData)}
      </div>
    </div>
  );
};
export default DataBox;
