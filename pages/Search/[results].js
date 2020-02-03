import React from "react";

import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    maxWidth: "980px",
    margin: "100px auto"
  },
  media: {
    height: "250px"
  }
});

const Results = props => {
  const { name, featured_image, timings } = props.currObject;
  const classes = useStyles();
  console.log({ obj: props.currObject });
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={featured_image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {timings}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    currObject: state.searchReducer.currObject
  };
};

export default connect(mapStateToProps)(Results);
