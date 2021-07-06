import React,{useState} from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../sam.jpg";
import Footer from "../components/Footer";
import { Drawer } from "@material-ui/core";
import Slider from "react-slick";
import Core from "../images/core.jpg" 
import Activate from "../images/activate.PNG"
import ReactIcon from "../images/react_2.png"
import CSharpIcon from "../images/C_Sharp_1.png"
import SQLIcon from "../images/SQL_1.png"
import PythonIcon from "../images/Python_1.png"
import UnrealIcon from "../images/Unreal_1.png"
import UnityIcon from "../images/Unity_1.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'

const img = [CSharpIcon, ReactIcon, SQLIcon, PythonIcon, UnityIcon, UnrealIcon]

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  footer:{
    position: "absolute",
    top:"90%" 
  }
}));


const Header = () => {
  const classes = useStyles();
  const [imgIndex, setImgIndex] = useState(0);

  // const NextArrow=({onCLick})=>{
  //   return(
  //     <div className="arrow next" onClick={onCLick}>
  //       <FaArrowRight/>
  //     </div>
  //   )
  // }
  // const PrevArrow=({onCLick})=>{
  //   return(
  //     <div className="arrow prev" onClick={onCLick}>
  //       <FaArrowLeft/>
  //     </div>
  //   )
  // }
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad:true,
    centerMode:true,
    centerPadding:0,
    // nextArrow:<NextArrow/>,
    // prevArrow:<PrevArrow/>,
    beforeChange:(current, next)=>setImgIndex(next)
  };
  return (
    <React.Fragment>
      <div style={{position:"absolute",bottom:'25%', left:'50%'}}>
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Samujit Das" size="100" round={true} />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Samujit Das"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Full Stack Developer",
            "Game Developer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      
    </Box>
    </div>
      {/* <Drawer> */}
        {/* <Footer className = {classes.footer}/> */}
      {/* </Drawer> */}
      <div >
      <Slider className="slider" {...settings}>
        {
          img.map((a,i)=>(
            <div className={i===imgIndex ? "slide activeSlide": "slide"}>
              <img src={a} alt={a}/>
            </div>
          ))
        }
      </Slider>
      </div>
    </React.Fragment>
  );
};

export default Header;
