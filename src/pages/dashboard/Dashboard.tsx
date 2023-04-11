import { Box } from "@mui/material";
import React from "react";
import DataRibbon from "@/components/Dashboard/DataRibbon/DataRibbon";
import TransactionPerDay from "@/components/Dashboard/TransactionPerDay/TransactionPerDay";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow/TransactionBottomRow";

const Dashboard = () => {
  return (
    <Box>
      {/*Data Ribbon - showing numerical stats */}
      <DataRibbon />
      {/*TransactionsPerDay - graph - numerical cards */}
      <TransactionPerDay />
      {/*Transaction Doughnut Charts Bottom Row - a few doughnut charts to break down some data into fractions */}
      <TransactionBottomRow />
    </Box>
  );
};

export default Dashboard;
