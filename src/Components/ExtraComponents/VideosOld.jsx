import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  faHeart,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";

import Nav from "./Nav";
import Menus from "./Menus";
import Sidebar from "./Sidebar";

import { useState } from "react";

import "./Videos.css";

function Video({ image, onclick, videoNum, likesNum, views }) {
  const [love, setLove] = useState(likesNum);
  const [isLoving, setIsLoving] = useState(true);
  const handleLove = () => {
    if (isLoving) {
      setLove(love + 1);
    } else {
      setLove(love - 1);
    }
    setIsLoving(!isLoving);
  };

  return (
    <>
      <div class="video_card">
        <img
          src={image}
          alt="Video Poster"
          class="byte-content"
          onclick={onclick}
        />
        <span class="video_number">{videoNum}</span>
      </div>

      <div class="card_menus">
        <span class="menus_parent">
          <span onClick={handleLove}>
            <FontAwesomeIcon icon={faHeart} />
            <span style={{ marginLeft: "5px" }}>
              <span class="likes_number">{love}</span> likes
            </span>
          </span>
          <span class="share_btn">
            <FontAwesomeIcon icon={faShareFromSquare} />
            <span style={{ marginLeft: "5px" }}>share</span>
          </span>
        </span>

        <span>
          <p class="views">{views} views</p>
        </span>
      </div>
    </>
  );
}

function Videos() {
  return (
    <>
      <Nav />
      <Menus />

      <div className="container">
        <br />
        <span style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>احسن القصص</h2>{" "}
          <p style={{ fontSize: "23px", color: "rgb(70, 255, 70)" }}>#free</p>
        </span>
        <p>Ahmad Shahram Wafaee</p>

        <Video
          image="./Sh-wafaee.jpg"
          onclick="thisis"
          videoNum="1"
          likesNum={5}
          views="116"
        />
        <Video
          image="./Sh-wafaee.jpg"
          onclick="thisis"
          videoNum="2"
          likesNum={16}
          views="104"
        />
        <Video
          image="./Sh-wafaee.jpg"
          onclick="thisis"
          videoNum="3"
          likesNum={12}
          views="97"
        />
        <Video
          image="./Sh-wafaee.jpg"
          onclick="thisis"
          videoNum="4"
          likesNum={15}
          views="103"
        />
      </div>

      <br />
      <br />
      <br />
    </>
  );
}

export default Videos;
