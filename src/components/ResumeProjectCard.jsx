import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export default function ResumeProjectCard() {
  return (
    <Card sx={{ display: "flex",maxHeight:'300px' }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pl: 1,
            pb: 1,
          }}
        >
          <Typography variant="h6">Firebase Messenger</Typography>
          <Typography p={1}>
            1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            temporibus enim atque ducimus sapiente modi iste sequi, culpa
           </Typography>
          <Typography p={1}>
            1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            temporibus enim atque ducimus sapiente modi iste sequi, culpa
           </Typography>
          <Typography p={1}>
            1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            temporibus enim atque ducimus sapiente modi iste sequi, culpa
           </Typography>
        
          <IconButton>
            <Link>Source</Link>
          </IconButton>
          <IconButton>
            <Link>Source</Link>
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
