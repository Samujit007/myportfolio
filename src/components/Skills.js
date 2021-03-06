import React, {useState} from "react"
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/activate.PNG";
import project2 from "../images/core.jpg";
import ReactPlayer from 'react-player'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Tropical Beach",
    description: `Tropical Beach in UE4 and Quixel`,
    image: project1,
    link:"https://youtu.be/wipG-SMp5tY",
    skills:['Unreal Engine 4', 'Quixel']
  },
  {
    name: "Tropical Beach",
    description: `Tropical Beach made with Unreal Engine 4 and Quixel`,
    image: project1,
    link:"https://youtu.be/EhSEqF2TsV0",
    skills:['Unreal Engine 4', 'Quixel']
  },
  {
    name: "Medieval",
    description: `Medieval, build in Unreal 4`,
    image: project1,
    link:"https://youtu.be/q_ElxKragWg",
    skills:['Unreal Engine 4', 'Quixel']
  },
  {
    name: "Medieval + Main Menu & Pause Menu",
    description: `Medieval, build in Unreal 4`,
    image: project1,
    link:"https://youtu.be/W_T8piASsdw",
    skills:['Unreal Engine 4', 'Quixel']
  },
  {
    name: "Terrain in Unity",
    description: `Basic terrain build in Unity 3D`,
    image: project1,
    link:"https://youtu.be/XFzbcaXI09M",
    skills:['Unity3d']
  },
  
];

const Skills = () => {
  const [is, setMail] = useState("");
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <div>
              <Card className={classes.cardContainer}>
              
              <CardActionArea>
                <ReactPlayer 
                  className = "react-player"
                  url={project.link}
                  width="100%"
                  height = "100%"
                  controls = {true}
                />
                
              </CardActionArea> 
             
              {/* <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button> */}
              {/* </CardActions> */}
            </Card>
              <div style={{color:'white', paddingLeft:'150px'}}><div style={{display:"flex"}}>
                <div style={{display:"flex", fontWeight:"bold", color:"tan"}}>Skills: </div>{project.skills.join(', ')}</div>
                </div>
              </div>
          </Grid>
        ))}
      </Grid>
      
    </Box>
  );
};

export default Skills;
