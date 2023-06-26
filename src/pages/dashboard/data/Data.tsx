import { Button, LinearProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import React from "react";
import scss from "./Data.module.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 550,
  width: "100%",
  bgcolor: "#212233",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  borderRadius: "16px",
};

const Data = () => {
  const notify = () =>
    toast.success("New order created!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [status, setStatus] = React.useState("");
  const [currency, setCurrency] = React.useState("");

  const handleStatusLabel = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  const handleCurrencyLabel = (event: SelectChangeEvent) => {
    setCurrency(event.target.value);
  };

  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 15,
  });

  return (
    <>
      <div className={scss.header}>
        <h1>Orders</h1>
        <Button
          onClick={handleOpen}
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          sx={{
            color: "white",
            backgroundColor: "#36498f",
            fontSize: "16px",
          }}
        >
          CREATE NEW
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className={scss.modal}
        >
          <Box sx={style} component="form">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              marginBottom={1}
              sx={{ color: "lightslategray" }}
            >
              Create New Order
            </Typography>
            <Divider variant="fullWidth" />
            <section>
              <TextField
                required
                id="outlined-required"
                label="Desk"
                defaultValue="D-"
              />
              <TextField
                required
                id="outlined-required"
                label="Commodity"
                defaultValue=""
              />
            </section>
            <section>
              <TextField
                required
                id="outlined-required"
                label="Trader Name"
                defaultValue=""
              />
              <TextField
                id="outlined-number"
                label="Quantity"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </section>
            <section>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Is Filled
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  defaultValue="isFilled"
                >
                  <FormControlLabel
                    value="isFilled"
                    control={<Radio />}
                    label="is Filled"
                  />
                  <FormControlLabel
                    value="notFilled"
                    control={<Radio />}
                    label="not Filled"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl sx={{ minWidth: "46%" }}>
                <InputLabel id="statusLabel">Status</InputLabel>
                <Select
                  labelId="statusLabel"
                  id="statusLabel"
                  value={status}
                  onChange={handleStatusLabel}
                  autoWidth
                  label="Status"
                >
                  <MenuItem value={1}>Rejected</MenuItem>
                  <MenuItem value={2}>Open</MenuItem>
                  <MenuItem value={3}>Partially Filled</MenuItem>
                </Select>
              </FormControl>
            </section>
            <section>
              <FormControl sx={{ minWidth: "46%" }}>
                <InputLabel id="currencyLabel">Unit Price Currency</InputLabel>
                <Select
                  labelId="currencyLabel"
                  id="currencyLabel"
                  value={currency}
                  onChange={handleCurrencyLabel}
                  autoWidth
                  label="Currency"
                >
                  <MenuItem value={1}>USD</MenuItem>
                  <MenuItem value={1}>CAD</MenuItem>
                  <MenuItem value={2}>THB</MenuItem>
                  <MenuItem value={3}>BRL</MenuItem>
                  <MenuItem value={4}>MXN</MenuItem>
                  <MenuItem value={5}>TRY</MenuItem>
                  <MenuItem value={5}>EUR</MenuItem>
                  <MenuItem value={5}>JPY</MenuItem>
                  <MenuItem value={5}>HKD</MenuItem>
                  <MenuItem value={5}>NZD</MenuItem>
                  <MenuItem value={5}>ARS</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-number"
                label="Unit Price"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </section>
            <section>
              <TextField
                id="outlined-number"
                label="SubTotal"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-number"
                label="Free Rate"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </section>
            <section>
              <TextField
                id="outlined-number"
                label="Free Amount"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button
                type="button"
                variant="contained"
                sx={{
                  py: 2,
                  maxWidth: 220,
                  width: "100%",
                  borderRadius: 3,
                  fontSize: "16px",
                  color: "white",
                  backgroundColor: "#36498f",
                }}
                onClick={() => {
                  notify();
                  handleClose();
                }}
              >
                Submit
              </Button>
            </section>
          </Box>
        </Modal>
      </div>
      <div
        style={{ height: "900px", width: "100%", backgroundColor: "#2B2D3F" }}
      >
        <DataGrid
          slots={{
            loadingOverlay: LinearProgress,
          }}
          loading={!data}
          {...data}
        />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
};

export default Data;
