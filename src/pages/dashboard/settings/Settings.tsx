import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Settings = () => {
  const [showRevenue, setShowRevenue] = React.useState(true);
  const [showProfit, setShowProfit] = React.useState(true);
  const [showOrders, setShowOrders] = React.useState(true);
  const [showCustomers, setShowCustomers] = React.useState(true);

  const handleShowRevenueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowRevenue(event.target.checked);
  };

  const handleShowProfitChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowProfit(event.target.checked);
  };

  const handleShowOrdersChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowOrders(event.target.checked);
  };

  const handleShowCustomersChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowCustomers(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };
  return (
    <>
      <Box sx={{ marginTop: "6rem" }}>
        <Typography variant="h4" gutterBottom>
          Dashboard Features
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Box>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {Array.from(Array(7)).map((_, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Item>xs=2</Item>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={showRevenue}
                          onChange={handleShowRevenueChange}
                        />
                      }
                      label="Revenue"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={showProfit}
                          onChange={handleShowProfitChange}
                        />
                      }
                      label="Profit"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={showOrders}
                          onChange={handleShowOrdersChange}
                        />
                      }
                      label="Orders"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={showCustomers}
                          onChange={handleShowCustomersChange}
                        />
                      }
                      label="Customers"
                      labelPlacement="start"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Save Settings
                </Button>
              </Grid>
            </Box>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default Settings;
