import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { IconButton, Paper, Tooltip, Typography } from "@mui/material";
import scss from "./DataCard.module.scss";
import React from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PaidIcon from "@mui/icons-material/Paid";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export type DataCardProps = {
  title: string;
  value: string;
  description: string;
  icon: string;
};

const DataCard = (props: DataCardProps) => {
  const { title, value, description, icon } = props;

  let IconComponent;
  switch (icon) {
    case "InsertChartIcon":
      IconComponent = InsertChartIcon;
      break;
    case "PaidIcon":
      IconComponent = PaidIcon;
      break;
    case "LocalMallIcon":
      IconComponent = LocalMallIcon;
      break;
    default:
      IconComponent = AutorenewIcon;
      break;
  }

  return (
    <Paper className={scss.dataCard} variant="outlined">
      <div className={scss.icon}>
        <IconButton aria-label="delete" size="large">
          <IconComponent fontSize="large" />
        </IconButton>
      </div>
      <div>
        <div className={scss.header}>
          <Typography fontSize={"16px"} color={"lightslategrey"}>
            {title}
          </Typography>
          <Tooltip
            title={
              <Typography fontSize={16}>
                {`${description} which is ${value}`}
              </Typography>
            }
          >
            <IconButton>
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>
        <Typography fontWeight={"bold"} fontSize={"24px"}>
          {value}
        </Typography>
      </div>
    </Paper>
  );
};

export default DataCard;
