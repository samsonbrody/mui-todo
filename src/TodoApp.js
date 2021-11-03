import React, { useState, useEffect, useContext } from "react";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";
import LilSnackBar from "./LilSnackBar";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ComputerIcon from "@mui/icons-material/Computer";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import Homepage from "./Homepage";
import Technologies from "./Technologies";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

import useMediaQuery from "@mui/material/useMediaQuery";
import { TodosProvider } from "./context/todoContext";
import { Route, Switch, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  Typography,
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Box,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  app: {
    minHeight: "100vh",
    backgroundColor: theme.palette.primary.dark,

    overflow: "scroll",
  },
  root: { height: "85px" },
  everythingBesidesNav: {
    marginTop: "4rem",
  },

  toolbarTransparent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "rgba(183,76,245,0.3)",
  },
}));

export default function TodoApp() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      className={classes.app}
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
      }}
    >
      <div>
        <CssBaseline />
        <AppBar elevation={0} position="fixed">
          <Toolbar
            sx={{ backgroundColor: theme.palette.primary.dark }}
            className={classes.root}
          >
            <Grid alignItems="center" container>
              {!isMobile ? (
                <Grid item>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    exact
                    to="/"
                  >
                    <IconButton style={{ color: "white" }}>
                      <HomeIcon sx={{ marginRight: "10px" }} />
                      <Typography> Home</Typography>
                    </IconButton>
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    exact
                    to="/tasks"
                  >
                    <IconButton style={{ color: "white" }}>
                      <PlaylistAddCheckIcon sx={{ marginRight: "10px" }} />
                      <Typography> To-do</Typography>
                    </IconButton>
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    exact
                    to="/technologies"
                  >
                    <IconButton style={{ color: "white" }}>
                      <ComputerIcon sx={{ marginRight: "10px" }} />
                      <Typography>Tech</Typography>
                    </IconButton>
                  </Link>
                </Grid>
              ) : (
                <Grid>
                  <Menu
                    onClose={handleMenuClose}
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      exact
                      to="/"
                    >
                      <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                    </Link>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      exact
                      to="/tasks"
                    >
                      <MenuItem onClick={handleMenuClose}>To-Dos</MenuItem>
                    </Link>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      exact
                      to="/technologies"
                    >
                      <MenuItem onClick={handleMenuClose}>Tech</MenuItem>
                    </Link>
                  </Menu>
                  <IconButton onClick={handleMenuClick}>
                    <MenuIcon style={{ color: "white" }} />
                  </IconButton>
                </Grid>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.everythingBesidesNav}>
        <AnimatePresence>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/tasks">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Grid
                  container
                  spacing={3}
                  alignItems="center"
                  justifyContent="center"
                  style={{ marginTop: "0rem" }}
                >
                  <TodosProvider>
                    <Grid item xs={11} sm={10} md={8} lg={7} xl={6}>
                      <NewTodoForm />
                      <LilSnackBar />

                      <TodoList />
                    </Grid>
                  </TodosProvider>
                </Grid>
              </motion.div>
            </Route>
            <Route exact path="/technologies">
              <Technologies />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </Box>
  );
}
