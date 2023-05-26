import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { IconButton, Paper, Tooltip, Typography } from "@mui/material";
import scss from "./DataCard.module.scss";
import React from "react";

export type DataCardProps = {
  title: string;
  value: string;
  description: string;
};

const DataCard = (props: DataCardProps) => {
  const { title, value, description } = props;

  return (
    <Paper className={scss.dataCard}>
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
      <Typography fontWeight={'bold'} fontSize={"24px"}>{value}</Typography>
    </Paper>
  );
};

export default DataCard;
