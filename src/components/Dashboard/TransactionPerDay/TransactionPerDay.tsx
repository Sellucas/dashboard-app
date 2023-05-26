import { Card, Grid, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import scss from "./TransactionPerDay.module.scss";
import DataChart from "@/components/DataChart/DataChart";
import { lineChartData } from "@/components/mockData";

export type TransactionCardType = {
  title: string;
  value: string;
  changeValue: string;
};

const TransactionPerDay = () => {
  const theme = useTheme();

  return (
    <Grid container gap={2} className={scss.wrapper}>
      <Paper className={scss.transactions}>
        <div className={scss.chart}>
          <Typography>Transaction per month</Typography>
          <DataChart type={"line"} data={lineChartData} />
        </div>
        <div className={scss.cardWrapper}>
          <Card className={scss.card} variant={"outlined"}>
            <div className={scss.cardTitle}>
              <Typography>Average Revenue</Typography>
            </div>
            <div className={scss.cardValue}>
              <Typography fontSize={"22px"}>$1.378,00</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                ▲ 428.7%
              </Typography>
            </div>
          </Card>
          <Card className={scss.card} variant={"outlined"}>
            <div className={scss.cardTitle}>
              <Typography>Buy-to-detail</Typography>
            </div>
            <div className={scss.cardValue}>
              <Typography fontSize={"22px"}>4.40%</Typography>
              <Typography color={theme.palette.error.main} fontSize={14}>
                ▼ 38.4%
              </Typography>
            </div>
          </Card>
          <Card className={scss.card} variant={"outlined"}>
            <div className={scss.cardTitle}>
              <Typography>Refunds</Typography>
            </div>
            <div className={scss.cardValue}>
              <Typography fontSize={"22px"}>0</Typography>
              <Typography color={theme.palette.warning.light} fontSize={14}>
                0
              </Typography>
            </div>
          </Card>
        </div>
      </Paper>
    </Grid>
  );
};

export default TransactionPerDay;
