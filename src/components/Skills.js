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
    name: "Terrain in Unity",
    description: `Basic terrain build in Unity 3D`,
    image: project1,
    link:"https://youtu.be/XFzbcaXI09M"
  },
  {
    name: "Medieval",
    description: `Medieval, build in Unreal 4`,
    image: project1,
    link:"https://youtu.be/q_ElxKragWg"
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
          </Grid>
        ))}
      </Grid>
      
    </Box>
  );
};

export default Skills;
