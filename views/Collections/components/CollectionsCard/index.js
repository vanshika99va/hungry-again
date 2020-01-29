import React from "react";
import {
  makeStyles,
  GridListTile,
  GridListTileBar,
  IconButton
} from "@material-ui/core";
import { InfoIcon } from "@material-ui/icons/Info";

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

const CollectionsCard = ({ item }) => {
  const classes = useStyles();

  const {
    collection: { title, description, url, image_url }
  } = item;
  return (
    // <div>
    //   <a href={url} style={{ textDecoration: "none" }}>
    //     <img src={image_url} alt="" width="100px" />
    //     <div>
    //       <div>{title}</div>
    //       <div>{description}</div>
    //     </div>
    //   </a>
    // </div>
    <GridListTile
      key={image_url}
      style={{ width: "400px", height: "220px", margin: "20px" }}
    >
      <img src={image_url} alt={title} />
      <a href={url} alink="#606060" target="_blank">
        <GridListTileBar
          title={title}
          subtitle={<span>{description}</span>}
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

export default CollectionsCard;
