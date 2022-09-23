import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const commonStyles = {
  border: 1,
  width: "200px",
};

function CardComponent(props) {
  return (
    <Box
      sx={{
        ...commonStyles,
        borderRadius: 1,
        borderTop: 10,
        borderColor: props.color,
      }}
    >
      <Card sx={{ maxWidth: 200 }} variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {props.name}
            </Typography>
            <Typography variant="body2">{props.post}</Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}

export default CardComponent;
