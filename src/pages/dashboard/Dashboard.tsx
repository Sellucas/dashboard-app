import { Box, Grid } from "@mui/material";
import React from "react";
import DataRibbon from "@/components/Dashboard/DataRibbon/DataRibbon";
import TransactionPerDay from "@/components/Dashboard/TransactionPerDay/TransactionPerDay";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow/TransactionBottomRow";
import Calendar from "@/components/Dashboard/Calendar";
import Task from "@/components/Dashboard/Task";
import Table from "@/components/Dashboard/Table";
import CardMidia from "@/components/Dashboard/CardMidia";

const Dashboard = () => {
  return (
    <Box>
      <Grid container gap={4} marginTop={2}>
        <DataRibbon />
        <TransactionPerDay />
      </Grid>

      <TransactionBottomRow />

      <Grid container gap={4} marginTop={4} marginBottom={4}>
        <CardMidia />
        <Task />
        <Calendar />
      </Grid>

      <Table />
    </Box>
  );
};

export default Dashboard;
