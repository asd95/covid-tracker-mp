import React from "react";
import DataBox from "../DataBox/DataBox.jsx";

const DataBoxes = ({ stats, loading }) => {  
  const {
    NewConfirmed: newConfirmed,
    TotalConfirmed: totalConfirmed,
    NewDeaths: newDeaths,
    TotalDeaths: totalDeaths,
  } = stats;
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4">
        <DataBox
          newData={newConfirmed}
          totalData={totalConfirmed}
          name="Cases"
          loading={loading}
        />
        <DataBox
          newData={newDeaths}
          totalData={totalDeaths}
          name="Deaths"
          additional={{ bgColor: "200" }}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default DataBoxes;
