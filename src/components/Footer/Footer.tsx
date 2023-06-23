import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import scss from "./Footer.module.scss";
import StackedBarChartSharpIcon from "@mui/icons-material/StackedBarChartSharp";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "#2B2D3F",
        marginTop: "6rem",
        paddingBottom: "1rem",
        paddingLeft: "4rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
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
            <Typography variant="body2" color="text.secondary">
              Your intuitive and customizable dashboard platform. Access
              real-time insights, share interactive panels, and make strategic
              decisions with ease. Take your data analysis to the next level
              with QuickView.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link
              href="https://www.facebook.com/"
              color="inherit"
              target="_blank"
            >
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
              target="_blank"
            >
              <Instagram />
            </Link>
            <Link
              href="https://www.twitter.com/"
              color="inherit"
              target="_blank"
            >
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link
              color="inherit"
              href="https://github.com/Sellucas"
              target="_blank"
            >
              Sellucas
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
