import { Box, Grid } from "@mui/material";
import React from "react";
import DataRibbon from "@/components/Dashboard/DataRibbon/DataRibbon";
import TransactionPerDay from "@/components/Dashboard/TransactionPerDay/TransactionPerDay";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow/TransactionBottomRow";

const Dashboard = () => {
  return (
    <Box>
      <Grid container gap={4} marginTop={2}>
        <DataRibbon />
        <TransactionPerDay />
      </Grid>
      <TransactionBottomRow />
    </Box>
  );
};

export default Dashboard;
