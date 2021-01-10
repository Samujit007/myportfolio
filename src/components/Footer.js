import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import { LinkedIn } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<Facebook />} className={classes.root} href = "https://www.facebook.com/somujit.das" target = "_blank"/>
      <BottomNavigationAction icon={<LinkedIn />} className={classes.root} href = "https://www.linkedin.com/in/samujit-das-311121138/" target = "_blank"/>
      <BottomNavigationAction icon={<GitHub />} className={classes.root} href = "https://github.com/Samujit007/" target = "_blank"/>
    </BottomNavigation>
  );
};
export default Footer;
