import Login from "@/components/Login/Login";
import { Box } from "@mui/material";
import React from "react";

const SignIn = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Login />
    </Box>
  );
};

export default SignIn;
