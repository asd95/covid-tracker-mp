import React from "react";
import Moment from "react-moment";

const DataTitle = ({ text, dataDate }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">{text}</h2>
      <div className="text-2xl mt-4 mb-10">
        <Moment format="MMMM Do YYYY, hh:mm:ss a">{dataDate}</Moment>
      </div>
    </div>
  );
};

export default DataTitle;
