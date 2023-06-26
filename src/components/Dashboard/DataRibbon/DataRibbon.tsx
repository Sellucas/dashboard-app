import { Grid } from "@mui/material";
import scss from "./DataRibbon.module.scss";
import React from "react";
import DataCard from "../DataCard/DataCard";

const DataRibbon = () => {
  return (
    <Grid container gap={2} className={scss.dataRibbon}>
      <Grid>
        <DataCard
          title={"Total Sales"}
          value={"462"}
          description={
            "The totals of all QuickView products in the current financial year"
          }
          icon="InsertChartIcon"
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Total Value"}
          value={"$73,732.53"}
          description={"The total sales of the current financial year"}
          icon={"PaidIcon"}
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Avg. Order Value"}
          value={"$159.30"}
          description={
            "The average order value for all sales this current financial year"
          }
          icon={"LocalMallIcon"}
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Conversion Rate"}
          value={"0.61%"}
          description={"How many pitches become sales"}
          icon={"AutorenewIcon"}
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;
