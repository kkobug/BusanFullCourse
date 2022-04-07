import React from "react";
import LikePlace from "./LikePlace";
import LikeFullCourse from "./LikeFullCourse";
import MyFullCourse from "./MyFullCourse";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProfileKakaoMap from "./ProfileKakaoMap";
const useStyles = makeStyles((theme: Theme) => ({
  likePlace: {
    marginTop: theme.spacing(12),
    // marginRight: theme.spacing(),
  },
}));
function ProfileMain() {
  const classes = useStyles();

  const tempData = [
    {
      title: "여기가 맞나..",
      placeId: 32,
      lat: 35.1797913,
      lng: 129.074987,
    },
    {
      title: "여기가 맞나..",
      placeId: 356,
      lat: 35.1697913,
      lng: 129.074987,
    },
    {
      title: "여기가 맞나..",
      placeId: 33,
      lat: 35.1797913,
      lng: 129.075987,
    },
  ];

  return (
    <div>
      <div className={classes.likePlace}>
        <LikePlace></LikePlace>
      </div>
      <MyFullCourse></MyFullCourse>
      <LikeFullCourse></LikeFullCourse>
      <p
        style={{
          fontWeight: "bold",
          fontSize: 20,
          textAlign: "left",
          marginLeft: "300px",
        }}
      >
        관심 장소 위치
      </p>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "1300px",
            height: "500px",
          }}
        >
          <ProfileKakaoMap placeLocationInfoList={tempData}></ProfileKakaoMap>
        </div>
      </div>
      {/* <VisitedPlace></VisitedPlace> */}
    </div>
  );
}
export default ProfileMain;
