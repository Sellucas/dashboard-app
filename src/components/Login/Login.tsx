import { Button } from "@mui/material";
import { useSession, signIn } from "next-auth/react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GoogleIcon from "@mui/icons-material/Google";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import scss from "./Login.module.scss";
import StackedBarChartSharpIcon from "@mui/icons-material/StackedBarChartSharp";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Sellucas" target="_blank">
        Sellucas
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const Login = () => {
  const { data: session } = useSession();

  return (
    <Container
      maxWidth="xs"
      sx={{ backgroundColor: "#161d20", marginTop: 8, borderRadius: "10px" }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={scss.logo}>
          <StackedBarChartSharpIcon sx={{ mr: 1 }} fontSize="medium" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
            }}
            className={scss.logoName}
          >
            QuickView
          </Typography>
        </div>
        <div className={scss.header}>
          <Typography component="h1" variant="h4" marginBottom={1}>
            Login
          </Typography>
          <Typography color="lightslategray">
            See your growth and get consulting support!
          </Typography>
        </div>

        <Button
          fullWidth
          sx={{
            mt: 3,
            mb: 2,
            color: "white",
            borderColor: "lightslategray",
            marginBottom: 3,
            marginTop: 5,
          }}
          type="submit"
          variant="outlined"
          startIcon={<GoogleIcon />}
          onClick={() => signIn()}
        >
          Log in with Google
        </Button>

        <Root>
          <Divider>
            <Typography color="lightslategray">Or</Typography>
          </Divider>
        </Root>

        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Grid container>
            <Grid item xs>
              <FormControlLabel
                control={
                  <Checkbox value="remember" sx={{ color: "#36498f" }} />
                }
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" sx={{ color: "lightslategray" }}>
                Forgot password?
              </Link>
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, color: "white", backgroundColor: "#36498f" }}
          >
            Sign In
          </Button>

          <Link
            href="#"
            variant="body2"
            aria-disabled
            sx={{ color: "lightslategray" }}
          >
            {"Don't have an account? Sign Up"}
          </Link>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Login;
