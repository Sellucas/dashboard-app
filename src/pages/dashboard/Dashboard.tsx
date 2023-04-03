import { Box, Grid, Paper } from "@mui/material";
import scss from './Dashboard.module.scss'
import React from "react";

const Dashboard = () => {
  return (
    <Box>
      <Grid container gap={2} className={scss.topCardsContainer}>
        <Grid>
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
      </Grid>
      <Grid xs={12} marginY={2}>
        <Paper className={scss.dataCard}>xs=9</Paper>
      </Grid>

    </Box>
  );
};

export default Dashboard;
