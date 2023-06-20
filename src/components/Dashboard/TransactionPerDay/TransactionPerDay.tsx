import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import scss from "./TransactionPerDay.module.scss";
import DataChart from "@/components/DataChart/DataChart";
import { lineChartData } from "@/components/mockData";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import LaunchIcon from "@mui/icons-material/Launch";

export type TransactionCardType = {
  title: string;
  value: string;
  changeValue: string;
};

const TransactionPerDay = () => {
  const theme = useTheme();

  return (
    <Grid container gap={2} className={scss.wrapper}>
      <Paper className={scss.transactions} variant="outlined">
        <div className={scss.chart}>
          <section className={scss.chartHeader}>
            <div>
              <Typography fontSize={22}>General Sale Activity</Typography>
            </div>
            <div className={scss.chartFilter}>
              <Typography sx={{ textDecoration: "underline" }}>
                All Time
              </Typography>
              <Typography color={"lightslategrey"}>1 Month</Typography>
              <Typography color={"lightslategrey"}>14 Days</Typography>
            </div>
          </section>
          <DataChart type={"line"} data={lineChartData} />
        </div>
        <div className={scss.cardWrapper}>
          <Card className={scss.card} variant={"elevation"}>
            <div className={scss.cardSection}>
              <div className={scss.cardIcon}>
                <Typography>
                  <TrendingUpIcon fontSize="large" />
                </Typography>
              </div>
              <div>
                <div className={scss.cardTitle}>
                  <Typography color={"lightslategrey"}>
                    Average Revenue
                  </Typography>
                </div>
                <div className={scss.cardValue}>
                  <Typography fontSize={"22px"}>$1.378</Typography>
                  <Typography color={theme.palette.success.main} fontSize={14}>
                    ▲ 428.7%
                  </Typography>
                </div>
              </div>
            </div>
          </Card>
          <Card className={scss.card} variant={"elevation"}>
            <div className={scss.cardSection}>
              <div className={scss.cardIcon}>
                <Typography>
                  <ShoppingCartIcon fontSize="large" />
                </Typography>
              </div>
              <div>
                <div className={scss.cardTitle}>
                  <Typography color={"lightslategrey"}>
                    Buy-to-Detail
                  </Typography>
                </div>
                <div className={scss.cardValue}>
                  <Typography fontSize={"22px"}>110,4%</Typography>
                  <Typography color={theme.palette.error.main} fontSize={14}>
                    ▼ 40.7%
                  </Typography>
                </div>
              </div>
            </div>
          </Card>
          <Card className={scss.card} variant={"elevation"}>
            <div className={scss.cardSection}>
              <div className={scss.cardIcon}>
                <Typography>
                  <FolderCopyIcon fontSize="large" />
                </Typography>
              </div>
              <div>
                <div className={scss.cardTitle}>
                  <Typography color={"lightslategrey"}>Refund</Typography>
                </div>
                <div className={scss.cardValue}>
                  <Typography fontSize={"22px"}>19</Typography>
                  <Typography color={theme.palette.error.main} fontSize={14}>
                    ▼ 14.7%
                  </Typography>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Paper>
    </Grid>
  );
};

export default TransactionPerDay;
