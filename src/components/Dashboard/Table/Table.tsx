import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import scss from "./Table.module.scss";
import { useTheme } from "@mui/material";

function createData(
  name: string,
  date: string,
  transaction: number,
  amount: string,
  sales: string,
  className: string,
  price: number
) {
  return {
    name,
    date,
    transaction,
    amount,
    sales,
    className,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const theme = useTheme();
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.date}</TableCell>
        <TableCell align="left">{row.transaction}</TableCell>
        <TableCell align="left">{row.amount}</TableCell>
        <TableCell align="left" className={`${scss[row.className]}`}>
          {row.sales}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(
    "LED Submersible Lights",
    "Jan 18,2023",
    26.0,
    "$24,001",
    "▲ 445%",
    "cellPositive",
    3.99
  ),
  createData(
    "Scented Candles",
    "Mar 22,2023",
    99.0,
    "$12,430",
    "▲ 155%",
    "cellPositive",
    4.99
  ),
  createData(
    "Portable Projector",
    "Apr 27,2022",
    66.0,
    "$11,900",
    "▼ 88.9%",
    "cellNegative",
    3.79
  ),
  createData(
    "Smart Watch",
    "Fev 03,2023",
    23.0,
    "$8,770",
    "▲ 81.2%",
    "cellPositive",
    2.5
  ),
  createData(
    "Phone Lenses",
    "Oct 09,2023",
    16.0,
    "$8,120",
    "▼ 43.9%",
    "cellNegative",
    1.5
  ),
  createData(
    "Laptop Accessories",
    "Oct 11,2023",
    16.0,
    "$200",
    "▲ 38.9%",
    "cellPositive",
    1.5
  ),
  createData(
    "Neck Massager",
    "Nov 29,2022",
    6.0,
    "$110",
    "▼ 3.9%",
    "cellNegative",
    1.5
  ),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper} className={scss.table} variant="elevation">
      <div className={scss.tableHeader}>
        <Typography fontSize={22}>Top Selling Products</Typography>
        <IconButton aria-label="delete" size="small">
          <MoreHorizIcon fontSize="large" />
        </IconButton>
      </div>
      <Table aria-label="collapsible table">
        <TableHead style={{ backgroundColor: "#2B2D3F" }}>
          <TableRow>
            <TableCell />
            <TableCell>Product Name</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Transaction</TableCell>
            <TableCell align="left">Amount</TableCell>
            <TableCell align="left">Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
