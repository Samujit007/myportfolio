import React,{useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typed from "react-typed";
import emailjs from 'emailjs-com';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Send from "@material-ui/icons/Send";
const about = ["Hi, I'm Samujit","E2E web developer, I specialize in backend development", "Game design is my passion"]
const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
  about:{
    position:"absolute",
    top: "30%",
    color: "tan",
    left: "50%",
    margin: "-100px 0 0 -208px",
    textAlign: "center",
  }
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);



const Contact = () => {
  const [email, setMail] = useState("");
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState(<div/>);
  function updateMail(e) {
    setMail(e.target.value)
  }
  
  function sendEmail(e) {
    e.preventDefault();
    var checkEmailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if (!checkEmailPattern.test(email)) {
      
      onOpenModal()
      setMsg(<div>Please enter <br/>
                valid email address 
            </div>)
  
    }else{
      emailjs.sendForm('service_g7eacol', 'template_dsn1uc7', e.target, 'user_7tDfUUA865lLGaoVs5VRX')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        onOpenModal()
        setMsg(<div>Mail <br/>
          sent successfully 
      </div>)
      }
      
  }
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const classes = useStyles();
   return (
    <Box component="div" className={classes.contactContainer}>
      <div className={classes.about}>
        {about.map(a=>(
            <Typography>
              <Typed strings={[a]} typeSpeed={40}/>
            </Typography>  
        ))}
        {/* Hi, I'm Samujit<br/>
        E2E Web Developer, I specialize in backend development<br/>
        Game design is My passion */}
      </div>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            <Typed strings={["Contact me"]} typeSpeed={40} />
          </Typography>
          <form onSubmit={sendEmail}>
              <InputField
                fullWidth={true}
                label="Name"
                variant="outlined"
                inputProps={{ className: classes.input }}
                name = "name"
              />
              <InputField
                fullWidth={true}
                label="Email"
                variant="outlined"
                inputProps={{ className: classes.input }}
                className={classes.field}
                name = "email"
                value={email} 
                onChange={updateMail}
              />
              <InputField
                fullWidth={true}
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                inputProps={{ className: classes.input }}
                name = "message"
              />
              <Button
                variant="outlined"
                fullWidth={true}
                endIcon={<Send />}
                className={classes.button}
                // onClick={(e)=>sendEmail(e)}
                type = "submit"
              >
                Send
              </Button>
           </form>
        </Box>
      </Grid>
      
      <Modal open={open} onClose={onCloseModal}>
        {msg}
      </Modal>
      
    </Box>
  );
  // return (
  //   <form className="contact-form" onSubmit={sendEmail}>
  //     <input type="hidden" name="contact_number" />
  //     <label>Name</label>
  //     <input type="text" name="name" />
  //     <label>Email</label>
  //     <input type="email" name="email" />
  //     <label>Message</label>
  //     <textarea name="message" />
  //     <input type="submit" value="Send" />
  //   </form>
  // );
};

export default Contact;
