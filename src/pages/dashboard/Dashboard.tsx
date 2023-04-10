import { Box, Grid, Paper } from "@mui/material";
import scss from "./Dashboard.module.scss";
import React from "react";
import DataRibbon from "@/components/Dashboard/DataRibbon/DataRibbon";
import TransactionPerDay from "@/components/Dashboard/TransactionPerDay/TransactionPerDay";

const Dashboard = () => {
  return (
    <Box>
      {/*Data Ribbon - showing numerical stats */}
      <DataRibbon />
      {/*TransactionsPerDay - graph - numerical cards */}
      <TransactionPerDay />
      {/*Transaction Doughnut Charts Bottom Row - a few doughnut charts to break down some data into fractions */}
    </Box>
  );
};

export default Dashboard;
