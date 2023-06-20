import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import scss from "./TransactionBottowRow.module.scss";
import DataChart from "@/components/DataChart/DataChart";
import {
  doughnutChartDataUserType,
  doughnutChartDataRevenue,
  doughnutChartDataCountry,
  doughnutChartDataCustomerRetention,
} from "@/components/mockData";

const TransactionBottomRow = () => {
  return (
    <Paper variant="outlined" className={scss.salesType}>
      <Typography fontSize={22}>Different Types of Sales</Typography>
      <Grid container className={scss.bottomRow}>
        <Grid>
          <Paper className={scss.dataCard}>
            <p>Transactions per User Type</p>
            <DataChart type={"doughnut"} data={doughnutChartDataUserType} />
          </Paper>
        </Grid>
        <Grid>
          <Paper className={scss.dataCard}>
            <p>Transactions per Day</p>
            <DataChart type={"doughnut"} data={doughnutChartDataRevenue} />
          </Paper>
        </Grid>
        <Grid>
          <Paper className={scss.dataCard}>
            <p>Transactions per Country</p>
            <DataChart type={"doughnut"} data={doughnutChartDataCountry} />
          </Paper>
        </Grid>
        <Grid>
          <Paper className={scss.dataCard}>
            <p>Customer Retention</p>
            <DataChart
              type={"doughnut"}
              data={doughnutChartDataCustomerRetention}
            />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TransactionBottomRow;
