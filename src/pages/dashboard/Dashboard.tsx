import { Box, Grid, Typography } from "@mui/material";
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
    <Box marginTop={10}>
      <Grid container gap={4} marginTop={2} marginBottom={2}>
        <DataRibbon />
        <TransactionPerDay />
      </Grid>

      <Table />
      <TransactionBottomRow />

      <div>
        <Typography fontSize={22} marginTop={4}>Social Area</Typography>
      </div>
      <Grid container gap={4} marginTop={4} marginBottom={4}>
        <CardMidia />
        <Task />
        <Calendar />
      </Grid>
    </Box>
  );
};

export default Dashboard;
