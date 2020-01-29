import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const Card = ({ item }) => {
  const classes = useStyles();
  const {
    restaurant: { name, featured_image, url, timings }
  } = item;

  return (
    <GridListTile
      key={featured_image}
      style={{ width: "400px", height: "220px", margin: "20px" }}
    >
      <img src={featured_image} alt={name} />
      <a href={url} alink="#606060" target="_blank">
        <GridListTileBar
          title={name}
          subtitle={<span>Timings: {timings}</span>}
          actionIcon={
            <IconButton
              aria-label={`info about ${name}`}
              className={classes.icon}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </a>
    </GridListTile>
  );
};
export default Card;
