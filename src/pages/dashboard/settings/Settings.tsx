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
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import AccessibleIcon from "@mui/icons-material/Accessible";
import ChatIcon from "@mui/icons-material/Chat";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import QuizIcon from "@mui/icons-material/Quiz";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { ScaleRounded } from "@mui/icons-material";

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
  const [showChatNotifications, setShowChatNotifications] =
    React.useState(true);
  const [makeDeal, setmakeDeal] = React.useState(true);

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

  const handleChatNotifications = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowChatNotifications(event.target.checked);
  };

  const handleMakeDeal = (event: React.ChangeEvent<HTMLInputElement>) => {
    setmakeDeal(event.target.checked);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  const settingsBox = [
    {
      icon: <AccountBalanceIcon fontSize="large" />,
      title: "Politics",
      index: 1,
    },
    {
      icon: <AddLocationAltIcon fontSize="large" />,
      title: "Localization",
      index: 2,
    },
    {
      icon: <AccessibleIcon fontSize="large" />,
      title: "Accessible",
      index: 3,
    },
    {
      icon: <ChatIcon fontSize="large" />,
      title: "Chat",
      index: 4,
    },
    {
      icon: <SupportAgentIcon fontSize="large" />,
      title: "Support",
      index: 5,
    },
    {
      icon: <QuizIcon fontSize="large" />,
      title: "FAQ",
      index: 6,
    },
    {
      icon: <GppGoodIcon fontSize="large" />,
      title: "Security",
      index: 7,
    },
  ];

  const settingCard = [
    {
      title: "Revenue",
      task: handleShowRevenueChange,
      status: showRevenue,
    },
    {
      title: "Show Profit",
      task: handleShowProfitChange,
      status: showProfit,
    },
    {
      title: "Show Orders",
      task: handleShowOrdersChange,
      status: showOrders,
    },
    {
      title: "Show Customers",
      task: handleShowCustomersChange,
      status: showCustomers,
    },
    {
      title: "Chat Notifications",
      task: handleChatNotifications,
      status: showChatNotifications,
    },
    {
      title: "Make a deal",
      task: handleMakeDeal,
      status: makeDeal,
    },
  ];

  return (
    <>
      <Box sx={{ marginTop: "6rem" }}>
        <Typography variant="h4" gutterBottom marginBottom={6}>
          Dashboard Features
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={1}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
              >
                {settingsBox.map((menuItem) => {
                  return (
                    <Grid key={menuItem.index} item xs={2} sm={4} md={4}>
                      <Item
                        sx={{
                          backgroundColor: "#2B2D3F",
                          py: 8,
                          cursor: "pointer",
                          "&:hover": {
                            opacity: 0.7,
                          },
                        }}
                      >
                        <div>
                          {menuItem.icon}
                          <Typography variant="h6">{menuItem.title}</Typography>
                        </div>
                      </Item>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>

            <Box sx={{ marginLeft: 4, marginTop: 4 }}>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  {settingCard.map((menuItem) => {
                    const { title, task, status } = menuItem;
                    return (
                      <FormGroup
                        sx={{
                          marginBottom: 6,
                        }}
                        key={title}
                      >
                        <FormControlLabel
                          control={<Switch checked={status} onChange={task} />}
                          label={title}
                          labelPlacement="end"
                          sx={{
                            backgroundColor: "#2B2D3F",
                            maxWidth: "400px",
                            width: "100%",
                            py: 4,
                            pl: 2,
                            pr: 2,
                            borderRadius: "8px",
                          }}
                        />
                      </FormGroup>
                    );
                  })}
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
