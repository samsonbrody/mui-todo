import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Grid, Paper, Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import HomepageModal from "./HomepageModal";
import BenefitsCard from "./BenefitsCard";

const useStyles = makeStyles((theme) => ({
  mainImg: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2970&q=80')`,
    height: "70vh",
    backgroundPosition: "40% 40%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "1.5rem",
    overflow: "auto",
  },
  infoBlock1: {
    backgroundImage:
      "linear-gradient(to left, #bfdbcc, #a6dabb, #8ed8a6, #78d68f, #64d275)",
    height: "25vh",
    backgroundPosition: "40% 40%",
    margin: theme.spacing(3),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "0.3rem",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  infoBlock2: {
    backgroundImage:
      "linear-gradient(to right top, #fdfafa, #fadbdb, #f4bcbc, #ec9e9d, #e27f7f)",
    height: "25vh",
    backgroundPosition: "40% 40%",
    margin: theme.spacing(3),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "0.3rem",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  infoBlockWhiteBreak: {
    backgroundColor: theme.palette.primary.main,
    height: "50vh",
    backgroundPosition: "40% 40%",
    marginTop: 19,
    marginBottom: 19,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  infoBlock3: {
    backgroundImage:
      "linear-gradient(to left bottom, #cfe6c1, #72d3b7, #00bad3, #0098f3, #1265eb)",
    height: "25vh",
    opacity: "500%",
    backgroundPosition: "40% 40%",
    margin: theme.spacing(3),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "0.3rem",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  infoBlock4: {
    backgroundImage:
      "linear-gradient(to right bottom, #f0f0f0, #dad6f0, #c4bdef, #aca5ee, #928ded, #7892f5, #5696fb, #009bff, #00b7ff, #00d0ff, #00e7fc, #5ffbf1)",
    height: "25vh",
    opacity: "90%",
    backgroundPosition: "40% 40%",
    margin: theme.spacing(3),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "0.3rem",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  infoBlockWide: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1493886961452-685be183798d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2891&q=80')",
    height: "34vh",
    opacity: "840%",
    backgroundPosition: "50% 50%",
    marginTop: theme.spacing(3),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // borderRadius: "0.3rem",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  homecontainer: {
    padding: 6,
  },
}));

export default function Homepage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal1 = () => {
    setIsModalOpen(!isModalOpen);
    <HomepageModal open={isModalOpen} />;
  };

  const theme = useTheme();
  const classes = useStyles();
  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Box>
            <Grid container>
              <Grid
                sx={{ marginBottom: 2.3 }}
                xs={12}
                sm={12}
                item
                className={classes.mainImg}
              >
                <Typography
                  sx={{
                    border: "1px solid white",
                    [theme.breakpoints.up("lg")]: {
                      paddingLeft: 30,
                      paddingRight: 30,
                      paddingTop: 3,
                      paddingBottom: 3,
                    },
                    [theme.breakpoints.up("xs")]: {
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 5,
                      paddingBottom: 5,
                    },
                    [theme.breakpoints.up("sm")]: {
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingTop: 3,
                      paddingBottom: 3,
                    },
                    borderRadius: 5,
                  }}
                  variant="h2"
                >
                  TODO inc.
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} md={6} item>
                <motion.li
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ cursor: "pointer" }}
                  className={classes.infoBlock1}
                  onClick={openModal1}
                >
                  <HomepageModal text="Simplicity." />
                </motion.li>
              </Grid>
              <Grid xs={12} sm={12} md={6} item>
                <motion.li
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ cursor: "pointer" }}
                  className={classes.infoBlock2}
                >
                  <HomepageModal text="Supercharged." />
                </motion.li>
              </Grid>
              <Grid xs={12} sm={12} md={12} item>
                <div className={classes.infoBlockWhiteBreak}>
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    container
                    spacing={4}
                    align="center"
                  >
                    <Grid xs={12} item>
                      <BenefitsCard
                        imgUrl="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80"
                        title="Seize the moment."
                        body="Don't wait until the moment is right. Start getting your stuff done
                        right now, or you'll procrastinate forever. Act on those momentary
                        bursts of energy because those things compound. Look, the time is now,
                        go out and get it!"
                      />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid xs={12} sm={12} md={6} item>
                <motion.li
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ cursor: "pointer" }}
                  className={classes.infoBlock3}
                >
                  <HomepageModal text="Lightning fast." />
                </motion.li>
              </Grid>
              <Grid xs={12} sm={12} md={6} item>
                <motion.li
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ cursor: "pointer" }}
                  className={classes.infoBlock4}
                >
                  <HomepageModal text="Done." />
                </motion.li>
              </Grid>
              <Grid xs={12} sm={12} md={12} item>
                <div className={classes.infoBlockWhiteBreak}>
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    container
                    spacing={4}
                    align="center"
                  >
                    <Grid xs={12} item>
                      <BenefitsCard
                        imgUrl="https://images.unsplash.com/photo-1549317336-206569e8475c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3087&q=80"
                        title="Keep it organized"
                        body="Studies have shown that keeping your daily tasks organized increases your productivity by around 90%"
                      />
                    </Grid>
                  </Grid>
                </div>
              </Grid>

              <Grid xs={12} sm={12} md={12} item>
                <motion.li
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ cursor: "pointer" }}
                  className={classes.infoBlockWide}
                  onClick={openModal1}
                >
                  <HomepageModal size="h3" text="GET IT DONE." />
                </motion.li>
              </Grid>
            </Grid>
          </Box>
        </motion.ul>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
