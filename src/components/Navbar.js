import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ArrowBack from "@material-ui/icons/ArrowBack";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/sam.jpg";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Skills from '@material-ui/icons/CloudDone';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SkillsComponent from "./Skills";
import Index from "./";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#222",
    margin: 0,
  },
  arrow: {
    color: "tomato",
  },
  title: {
    color: "tan",
  },
  menuSliderContainer: {
    width: 320,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
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
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
  { listIcon: <Skills />, listText: "Skills", listPath: "/skills" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];  


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [noti, setnoti] = useState(false);
  const [isPage, setIsPage] = useState(false);
  const classes = useStyles();
  const getNoti=()=>{
    setnoti(!noti)
  }
  const arrowOpen=()=>{
    setnoti(false)
    setOpen(true)
  }
  const pageOpen=(param)=>{
    setOpen(false)
    if(param!="Home") setIsPage(true)
    else setIsPage(false)
  }

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Samujit Das" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => pageOpen(item.listText)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <React.Fragment>
      <>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton onClick={() => arrowOpen()}>
              <ArrowBack className={classes.arrow} />
            </IconButton>
            <Typography variant="h5" className={classes.title} onClick={() => arrowOpen()}>
              Portfolio
            </Typography>
            <div style={{position:'absolute', right:'30px', cursor:"pointer"}}>
              <Link to="/Skills"><NotificationsActiveIcon/></Link>
              <a href='Resume.pdf' target = 'blank' style={{marginLeft:"15px", color:"tan"}}>
              <PictureAsPdfIcon/>
              </a>
            </div>
            {/* <BottomNavigationAction icon={<Facebook />} className={classes.root} href = "https://www.facebook.com/somujit.das" target = "_blank"/>
            <BottomNavigationAction icon={<Facebook />} className={classes.root} href = "https://www.facebook.com/somujit.das" target = "_blank"/> */}
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
      </>
    </React.Fragment>
  );
};

export default Navbar;
