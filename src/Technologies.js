import React from "react";
import { Grid, Paper, Card, Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    // border: "3px solid white",
    [theme.breakpoints.up("sm")]: {
      padding: "2rem",
    },
    [theme.breakpoints.up("xs")]: {
      paddingLeft: "3rem",
      paddingRight: "3rem",
    },

    justifyContent: "center",
  },
  gridItem: {
    // border: "2px solid green",
    padding: "1rem",
  },
  paper: {
    padding: "1rem",
    [theme.breakpoints.up("xs")]: {
      border: `14px solid ${theme.palette.primary.light}`,
      marginLeft: "0rem",
      marginRight: "0rem",
    },
    [theme.breakpoints.up("sm")]: {
      border: `14px solid ${theme.palette.primary.light}`,
      marginLeft: "0.4rem",
      marginRight: "0.4rem",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "3rem",
      marginRight: "3rem",
    },
  },
}));
export default function Technologies() {
  const classes = useStyles();
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Grid className={classes.container} container>
          <Grid className={classes.gridItem} item xs={12}>
            <Paper
              sx={{ borderRadius: "0.75rem" }}
              elevation={6}
              className={classes.paper}
            >
              <Typography sx={{ marginBottom: "1rem" }} variant="h5">
                React
              </Typography>
              <Typography variant="subtitle2">
                React is the core technology used in this project. This project
                only contains functional components, as opposed to traditional
                class based ones. React's easy to navigate component-based
                layout allows me to manipulate changing data very quickly, and
                display that with declaritive programming techniques.
              </Typography>
            </Paper>
          </Grid>
          <Grid className={classes.gridItem} item xs={12}>
            <Paper
              sx={{ borderRadius: "0.75rem" }}
              elevation={6}
              className={classes.paper}
            >
              <Typography sx={{ marginBottom: "1rem" }} variant="h5">
                Material UI (MUI)
              </Typography>
              <Typography variant="subtitle2">
                Material UI was the CSS framework I chose to build out the
                visual aspects of the user interface. I particularly like the
                Grid layout system built into MUI, and find it both simple and
                fast to build amazing user interfaces. The hardest part of
                layouts for me has been making them responsive, and MUI makes
                this easy with simple media queries and breakpoints.
              </Typography>
            </Paper>
          </Grid>
          <Grid className={classes.gridItem} item xs={12}>
            <Paper
              sx={{ borderRadius: "0.75rem" }}
              elevation={6}
              className={classes.paper}
            >
              <Typography sx={{ marginBottom: "1rem" }} variant="h5">
                Context API
              </Typography>
              <Typography variant="subtitle2">
                The Context API built into React allows for simplified state
                management within this app. This way, I don't have to use "prop
                drilling" to pass functions and data down the component tree. To
                complete the state management package, I used the useReducer
                hook to combine all actions that act upon the "to-do" state into
                one reducer function.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}
