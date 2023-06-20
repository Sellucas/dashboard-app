import { Button, LinearProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import React from "react";
import scss from "./Data.module.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Data = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 15,
  });

  return (
    <>
      <div className={scss.header}>
        <h1>Orders</h1>
        <Button
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          sx={{
            color: "white",
            backgroundColor: "#36498f",
            fontSize: "16px",
          }}
        >
          CREATE NEW
        </Button>
      </div>
      <div
        style={{ height: "900px", width: "100%", backgroundColor: "#2B2D3F" }}
      >
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
