import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function BenefitsCard(props) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        borderRadius: 4,
        [theme.breakpoints.up("xs")]: {
          maxWidth: "70%",
        },
        [theme.breakpoints.up("md")]: {
          maxWidth: "40%",
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={props.imgUrl}
        alt="OOKAY"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => alert("you just got some brand new vibes!! :)")}
          size="small"
        >
          Vibes
        </Button>
        <Button
          onClick={() => alert("congrats on find the details!!!")}
          size="small"
        >
          Details{" "}
        </Button>
      </CardActions>
    </Card>
  );
}
