import React from "react";
import Link from "next/link";

import { connect } from "react-redux";

import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";

import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

import { setCurrObject } from "../actions";

const useStyles = makeStyles(theme => ({
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const Card = ({ item, setCurrObject }) => {
  const classes = useStyles();
  const {
    restaurant: { name, featured_image, timings }
  } = item;

  return (
    <Link href="/Search/[results]" as={`Search/${name}`}>
      <GridListTile
        key={featured_image}
        style={{
          width: "290px",
          height: "170px",
          margin: "20px",
          cursor: "pointer"
        }}
      >
        <img src={featured_image} alt={name} />

        <GridListTileBar
          title={name}
          subtitle={<span>Timings: {timings}</span>}
          onClick={() => setCurrObject(item.restaurant)}
          actionIcon={
            <IconButton
              aria-label={`info about ${name}`}
              className={classes.icon}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>
    </Link>
  );
};

const mapDispatchToPorps = dispatch => {
  return {
    setCurrObject: currObj => dispatch(setCurrObject(currObj))
  };
};
export default connect(null, mapDispatchToPorps)(Card);
