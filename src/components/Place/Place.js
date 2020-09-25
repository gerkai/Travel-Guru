import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

import { useHistory } from "react-router-dom";
import "./Place.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    margin: "10px",
    float: "left",
  },
  media: {
    height: 200,
  },
  actions: {
    margin: "2px",
  },
  content: {
    margin: "34px ",
  },
});

const Place = (props) => {
  const { placeName, imgUrl } = props.place;

  const classes = useStyles();

  const history = useHistory();
  const handleClick = (placeTypeName) => {
    history.push(`/book/${placeTypeName}`);
  };
  return (
    <Card onClick={() => handleClick(placeName)} className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imgUrl} title={placeName} />
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            {placeName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <button className="click-button">
          Click <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </CardActions>
    </Card>
  );
};

export default Place;
