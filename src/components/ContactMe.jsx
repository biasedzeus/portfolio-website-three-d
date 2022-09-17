import styled from "@emotion/styled";
import { Input, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import toast from 'react-hot-toast';

const ContactMeContainer = styled(Stack)({
  backgroundColor: "rgba(255, 255,255,0.5)",
  marginTop: "1rem",
  color: "black",
  display: "flex",
  width: "90%",
  margin: "0 auto",
  padding: "1rem",
  borderRadius: "1.4rem",
  marginBottom: "2rem",
  flexDirection: "column",
  minHeight: "435px",
  textOverflow: "ellipsis",
  alignItems: "center",
  justifyContent: "center",
});

const StyledInput = styled(Input)({
  background: "white",
  borderRadius: "2rem",
  outline: "none",
  border: "none",
  margin: "2rem",
  width: "80%",
  padding: ".5rem",
});

const StyledTextField = styled(TextField)({
  background: "white",
  borderRadius: "2rem",
  outline: "none",
  border: "none",
  margin: "2rem",
  width: "80%",
  padding: ".5rem",

  ":focus":{
    borderRadius: "2rem",
  }
});

const ContactMe = () => {
    const [email, setEmail] = useState("");
    const [message,setMessage] = useState("");

  return (
    <Stack>
      <Typography fontSize="1.5rem" fontWeight="700" textAlign="center" p={3}>
        Have any Query ?<Typography fontSize="1.5rem" fontFamily="Poppins" fontWeight="700" component="span">
            Ask Me
        </Typography>
      </Typography>
      <ContactMeContainer id="contactme">
        <label htmlFor="email">Email</label>
      <input name="email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <label htmlFor="message">Message</label>
      <textarea id="message" rows="7" value={message} onChange={(e) => setMessage(e.target.value)}/>
      <button onClick={() =>{
        toast.success("Coming soon,Feature not added yet",{
            duration:5000,
            position: "bottom-center",
        })
      }} className="sendmessage">Send Message</button>
      </ContactMeContainer>
    </Stack>
  );
};

export default ContactMe;
