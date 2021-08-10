import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./style";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  const coordinates = { lot: 0, lng: 0 };

  return (
    <div>
      <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyACVNb2BnPYsbm3HEYktbe9I3CUSqO8Z3g" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={""}
          onChildClick={""}
        ></GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
