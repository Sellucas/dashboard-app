import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { signIn, signOut, useSession } from "next-auth/react";
import { Divider, useMediaQuery, useTheme } from "@mui/material";
import NextLink from "next/link";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import StackedBarChartSharpIcon from "@mui/icons-material/StackedBarChartSharp";
import scss from "./Header.module.scss";

export type HeaderProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
};

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = (props: HeaderProps) => {
  const { ColorModeContext } = props;
  const { data: session } = useSession();
  const theme = useTheme();
  const userProfileImg = session?.user?.image as string;

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const tabletCheck = useMediaQuery("(min-width: 768px");

  const infoUser = tabletCheck && session ? true : false;

  return (
    <AppBar
      position="fixed"
      sx={{
        marginBottom: "40px",
        background: "#2B2D3F",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StackedBarChartSharpIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            fontSize="large"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
            }}
            className={scss.logoName}
          >
            QuickView
          </Typography>

          <StackedBarChartSharpIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            fontSize="large"
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            QuickView
          </Typography>

          {infoUser && (
            <>
              <Box
                sx={{
                  paddingRight: 3,
                  marginLeft: "auto",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <IconButton aria-label="delete" size="large">
                    <SearchIcon />
                  </IconButton>
                </Box>
                <Box sx={{ paddingRight: 3 }}>
                  <IconButton aria-label="delete" size="large">
                    <StyledBadge badgeContent={4} color="error">
                      <NotificationsIcon />
                    </StyledBadge>
                  </IconButton>
                </Box>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ marginRight: 3 }}
                />

                <Box>
                  <Typography>{session?.user?.name}</Typography>
                  <Typography fontSize={12} color={"#D3D3D3"}>
                    Super Admin
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open profile settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={session?.user?.name as string}
                      src={userProfileImg}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <NextLink
                      href={"/dashboard/profile"}
                      style={{
                        color: theme.palette.text.primary,
                        textDecoration: "none",
                      }}
                    >
                      <Typography textAlign="center">Profile</Typography>
                    </NextLink>
                  </MenuItem>
                  <MenuItem onClick={() => (session ? signOut() : signIn())}>
                    <Typography textAlign="center">
                      {session ? "Logout" : "Login"}
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
