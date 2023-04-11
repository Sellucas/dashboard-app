import { LinearProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import React from "react";

const Data = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 15,
  });

  return (
    <>
      <h1>Data</h1>
      <p>
        The bestest of Data available here at your finger tips in table form.
        This cloud be a whole section of data that is available for users to
        deep dive further into the numbers/stats.
      </p>
      <div style={{ height: "600px", width: "100%" }}>
        <DataGrid
          slots={{
            loadingOverlay: LinearProgress,
          }}
          loading={!data}
          {...data}
        />
      </div>
    </>
  );
};

export default Data;
