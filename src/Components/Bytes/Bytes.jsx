import React, { useState, useRef, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

import Header from "../Header/Header";
import Menus from "../Menus/Menus";

import "./Bytes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAdd, faClose } from "@fortawesome/free-solid-svg-icons";
import EduAlert from "../EsuAlert/EduAlert";
import Overlay from "../Overlay/Overlay";

let PlayByte = ({ video, isPlaying, setPlayingTrack, closePage }) => {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setPlayingTrack(null); // Reset if currently playing
    } else {
      setPlayingTrack(videoRef.current); // Set this video as the current track
      videoRef.current.play();
    }
  };

  const updateProgress = () => {
    const currentProgress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(currentProgress);
  };

  // const handleProgressChange = (event) => {
  //   const newProgress = event.target.value;
  //   videoRef.current.currentTime =
  //     (newProgress / 100) * videoRef.current.duration;
  //   setProgress(newProgress);
  // };

  // const resetvideo = () => {
  //   setProgress(0);
  // };

  useEffect(() => {
    togglePlayPause();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        backgroundColor: "black",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 99999,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "60px",
          width: "100%",
          height: "85%",
          backgroundColor: "transparent",
          overflow: "hidden",
        }}
      >
        <video
          style={{ width: "100%", height: "100%" }}
          ref={videoRef}
          src={video}
          onTimeUpdate={updateProgress}
          onEnded={() => {
            // resetvideo();
            setPlayingTrack(null); // Reset on video end
          }}
          onClick={togglePlayPause}
        ></video>

        {/* <input
            type="range"
            className="progress-bar   w-100"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            onClick={(e) => e.stopPropagation()}
          /> */}

        <div
          style={{
            width: "100%",
            height: "3px",
            backgroundColor: "rgb(160, 160, 160)",
            overflow: "hidden",
            position: "absolute",
            top: 0,
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "white",
              transition: "width 0.4s linear",
            }}
          ></div>
        </div>
        <span
          onClick={closePage}
          className="playComponentsCloseBtn"
          style={{ top: "13px", left: "9px" }}
        >
          <FontAwesomeIcon icon={faClose} />
        </span>
      </div>
    </div>
  );
};

function Bytes() {
  const [showAlert, setShowAlert] = useState(false);
  const handleAlert = () => {
    setShowAlert(true);
  };
  const closeAlert = () => {
    setShowAlert(false);
  };

  const wikipediaServices = [
    {
      objectId: 1,
      text: "Islamic History",
      path: "",
    },
    {
      objectId: 2,
      text: "Islamic Studies",
      path: "",
    },
    {
      objectId: 3,
      text: "Islamic Schools",
      path: "",
    },
    {
      objectId: 4,
      text: "Madrasa",
      path: "",
    },
    {
      objectId: 5,
      text: "Quranic Studies",
      path: "",
    },
    {
      objectId: 6,
      text: "Islamic Education",
      path: "",
    },
  ];

  return (
    <>
      <Header />
      <Menus />

      <div className="container p-4">
        <h2 style={{ fontWeight: "bold" }}>Bytes</h2>
        <p>These bytes are only for examples</p>

        <div style={{ textAlign: "end" }} className="">
          <button onClick={handleAlert} id="add-byte" class="btn">
            <FontAwesomeIcon icon={faAdd} />
          </button>
        </div>

        <BytesSection />

        <p style={{ marginTop: "100px" }} className=" " id="wiki_heading">
          Wikipedia services
        </p>

        <div id="wikiServParent">
          {wikipediaServices.map((service) => (
            <a key={service.objectId} href={service.path} target="_blank">
              <div className="wikpedia-services" style={{}}>
                <h4>{service.text}</h4>{" "}
                <FontAwesomeIcon
                  style={{ fontSize: "20px" }}
                  icon={faAngleDown}
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <br />
      <br />

      {showAlert && (
        <EduAlert
          alertMessage="To add byte, you need to log in or sign up first."
          closeAlert={closeAlert}
        />
      )}
      {showAlert ? <Overlay /> : ""}
    </>
  );
}

import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

function Byte({
  image,
  video,
  views,
  description,
  name,
  isPlaying,
  setPlayingTrack,
}) {
  const [playMusicOpen, setPlayMusicOpen] = useState(false);
  const handlePlayMusic = () => {
    setPlayMusicOpen(true);
  };
  const closePlayMusic = () => {
    setPlayMusicOpen(false);
  };

  // const openFullscreenVideo = (videoSrc) => {
  //   const fullScreenWindow = window.open(videoSrc, "fullscreen=yes");
  //   fullScreenWindow.focus();
  // };

  return (
    <>
      <div onClick={handlePlayMusic} id="byteContainer" class="byte">
        <img src={image} alt="Video Poster" class="byte-content" />
        <span class="byte_views">
          <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faPlay} />{" "}
          {views}
        </span>
        <div className="byteDescription">
          <p>{description}</p>
        </div>
      </div>

      {playMusicOpen && (
        <PlayByte
          name={name}
          description={description}
          video={video}
          isPlaying={isPlaying}
          setPlayingTrack={setPlayingTrack}
          closePage={closePlayMusic}
        />
      )}
    </>
  );
}

function BytesSection() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  useEffect(() => {
    async function getUsers() {
      try {
        const result = await axios("");
        setUsers(result.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    }
    getUsers();
  }, []);

  const [playingTrack, setPlayingTrack] = useState(null);

  const handleSetPlayingTrack = (video) => {
    // Pause the currently playing track if it exists
    if (playingTrack && playingTrack !== video) {
      playingTrack.pause();
    }
    setPlayingTrack(video);
  };

  const ScrollRight = () => {
    const bytesDiv = document.querySelector(".bytes");
    bytesDiv.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    const bytesDiv = document.querySelector(".bytes");
    bytesDiv.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "-40px",
         }}
      >
        <button
          onClick={scrollLeft}
          className="b-scroll-btns"
          id="bytes_scroll_btn_left"
          style={{ right: "15px" }}
        >
          {/* <i className="fas fa-angle-left"></i> Left */}
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          onClick={ScrollRight}
          className="b-scroll-btns"
          id="bytes_scroll_btn_right"
          style={{ left: "15px" }}
        >
          {/* <i className="fas fa-angle-right"></i> Right */}
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>

      {/* Bytes Section */}

      {loading ? (
        <div className="bytePlaceholederSection">
          <div class="bytePlaceholder">
            {/* <div className="bytes_spinner"></div> */}
          </div>
          <div class="bytePlaceholder">
            {/* <div className="bytes_spinner"></div> */}
          </div>
        </div>
      ) : (
        <div>
          <div className="bytes">
            <Byte
              image="./poster-1.jpg"
              views="0"
              description="Lorem ispum doller, something is important here"
              video="./Video1.mp4"
              isPlaying={playingTrack?.src === "./Video1.mp4"}
              setPlayingTrack={handleSetPlayingTrack}
            />
            <Byte
              image="./poster-2.jpg"
              views="0"
              description="Lorem ispum doller, something is important here"
              video="./Video2.mp4"
              isPlaying={playingTrack?.src === "./Video1.mp4"}
              setPlayingTrack={handleSetPlayingTrack}
            />
            <Byte
              image="./poster-3.jpg"
              views="0"
              description="Lorem ispum doller, something is important here"
              video="./Video3.mp4"
              isPlaying={playingTrack?.src === "./Video1.mp4"}
              setPlayingTrack={handleSetPlayingTrack}
            />
            <Byte
              image="./poster-4.jpg"
              views="0"
              description="Lorem ispum doller, something is important here"
              video="./Video4.mp4"
              isPlaying={playingTrack?.src === "./Video1.mp4"}
              setPlayingTrack={handleSetPlayingTrack}
            />
            <Byte
              image="./poster-5.jpg"
              views="0"
              description="Lorem ispum doller, something is important here"
              video="./Video5.mp4"
              isPlaying={playingTrack?.src === "./Video1.mp4"}
              setPlayingTrack={handleSetPlayingTrack}
            />
            <Byte
              image="./poster-6.jpg"
              views="0"
              description="Lorem ispum doller, something is important here"
              video="./Video6.mp4"
              isPlaying={playingTrack?.src === "./Video1.mp4"}
              setPlayingTrack={handleSetPlayingTrack}
            />
            <Byte
              image="./poster-7.jpg"
              views="0"
              description="Lorem ispum doller, something is important here"
              video="./Video7.mp4"
              isPlaying={playingTrack?.src === "./Video1.mp4"}
              setPlayingTrack={handleSetPlayingTrack}
            />
            <Byte
              image="./poster-8.jpg"
              views="0"
              description="Lorem ispum doller, something is important here"
              video="./Video8.mp4"
              isPlaying={playingTrack?.src === "./Video1.mp4"}
              setPlayingTrack={handleSetPlayingTrack}
            />
            <Byte
              image="./poster-9.jpg"
              views="0"
              description="Lorem ispum doller, something is important here"
              video="./Video9.mp4"
              isPlaying={playingTrack?.src === "./Video1.mp4"}
              setPlayingTrack={handleSetPlayingTrack}
            />
            <Byte
              image="./poster-10.jpg"
              views="0"
              description="Lorem ispum doller, something is important here"
              video="./Video10.mp4"
              isPlaying={playingTrack?.src === "./Video1.mp4"}
              setPlayingTrack={handleSetPlayingTrack}
            />
          </div>

          {/* <PlayByte /> */}
        </div>
      )}
    </>
  );
}

export default Bytes;
