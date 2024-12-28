import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPause } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import Menus from "../Menus/Menus";
import Overlay from "../Overlay/Overlay";
import "./Music.css";

let PlayMusic = ({
  name,
  description,
  audio,
  isPlaying,
  setPlayingTrack,
  closePage,
}) => {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setPlayingTrack(null); // Reset if currently playing
    } else {
      setPlayingTrack(audioRef.current); // Set this audio as the current track
      audioRef.current.play();
    }
  };

  const updateProgress = () => {
    const currentProgress =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(currentProgress);
  };

  const handleProgressChange = (event) => {
    const newProgress = event.target.value;
    audioRef.current.currentTime =
      (newProgress / 100) * audioRef.current.duration;
    setProgress(newProgress);
  };

  const resetAudio = () => {
    setProgress(0);
  };

  useEffect(() => {
    togglePlayPause();
  }, []);

  return (
    <>
      <div className="playMusicCard">
        {/* <FontAwesomeIcon
          onClick={closePage}
          style={{
            position: "absolute",
            top: "12px",
            right: "18px",
            fontSize: "22px",
          }}
          icon={faClose}
        /> */}

        <span className="music-waves">
          <div className="sound-wave">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        </span>

        <div className="lh-1  " style={{ marginBottom: "40px" }}>
          <p className="fs-2 fw-bold"> {name}</p>
          <p className="fs-5"> {description}</p>
        </div>

        <audio
          ref={audioRef}
          src={audio}
          onTimeUpdate={updateProgress}
          onEnded={() => {
            resetAudio();
            setPlayingTrack(null); // Reset on audio end
          }}
        />

        <div className="d-flex justify-content-center d-none d-sm-block">
          <button
            className="btn text-light fs-4 PM_closeBtn"
            onClick={closePage}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
          <button
            onClick={togglePlayPause}
            style={{
              padding: "10px 19px",
              marginTop: "-20px",
              marginBottom: "8px",
            }}
            className="btn btn-primary fs-4  rounded-circle text-center"
          >
            <FontAwesomeIcon icon={faPause} />
          </button>
        </div>

        <div className="d-flex align-items-center gap-2">
          <input
            style={{ cursor: "pointer" }}
            type="range"
            className="progress-bar   w-100"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            onClick={(e) => e.stopPropagation()}
          />
          <span>00:00</span>
        </div>
      </div>
    </>
  );
};

function EachMusic({ name, description, audio, isPlaying, setPlayingTrack }) {
  const [playMusicOpen, setPlayMusicOpen] = useState(false);
  const handlePlayMusic = () => {
    setPlayMusicOpen(true);
  };
  const closePlayMusic = () => {
    setPlayMusicOpen(false);
  };

  return (
    <div className="each-music">
      <div
        className="music-card"
        // onClick={togglePlayPause}
        onClick={handlePlayMusic}
        style={{
          backgroundColor: "transparent",
        }}
      >
        <div className="d-flex d-lg-block align-items-center m-0">
          <span style={{ padding: "5px 10px" }} className="islamic-music-icon">
            <img
              className="music-icon"
              src="./Music-icon.png"
              alt="Music Icon"
            />
          </span>

          <p className="m-0">
            <strong style={{ marginRight: "7px" }}>{name}</strong>
            {description}
          </p>
        </div>
      </div>

      {playMusicOpen && (
        <PlayMusic
          name={name}
          description={description}
          audio={audio}
          isPlaying={isPlaying}
          setPlayingTrack={setPlayingTrack}
          closePage={closePlayMusic}
        />
      )}
      {playMusicOpen ? <Overlay closeIt={closePlayMusic} /> : ""}
    </div>
  );
}

function Music() {
  const [playingTrack, setPlayingTrack] = useState(null);

  const handleSetPlayingTrack = (audio) => {
    // Pause the currently playing track if it exists
    if (playingTrack && playingTrack !== audio) {
      playingTrack.pause();
    }
    setPlayingTrack(audio);
  };

  return (
    <>
      <Header />
      <Menus />

      <div className="container pt-4 music-container">
        <EachMusic
          name="Maher Zain"
          description="Wa heshna ya rasullallah"
          audio="./maher_zain_waheshna.mp3"
          isPlaying={playingTrack?.src === "./maher_zain_waheshna.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Maher Zain"
          description="Radhitu be'Allah Raba"
          audio="./maher_zain_radhitu.mp3"
          isPlaying={playingTrack?.src === "./maher_zain_radhitu.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Maher Zain"
          description="Huwa Ahmadun wa Muhammad"
          audio="./maher_zain_huwa.mp3"
          isPlaying={playingTrack?.src === "./maher_zain_huwa.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Maher Zain"
          description="Barakallahu lakuma wa barakah"
          audio="./maher_zain_barakallah.mp3"
          isPlaying={playingTrack?.src === "./maher_zain_barakallah.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Maher Zain"
          description="Mawlaya Salem wa Sale"
          audio="./maher_zain_mawlaya.mp3"
          isPlaying={playingTrack?.src === "./maher_zain_mawlaya.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />

        <EachMusic
          name="Maher Zain"
          description="Assalamualika ya Rasullallah"
          audio="./maher_zain_assalamualika.mp3"
          isPlaying={playingTrack?.src === "./maher_zain_assalamualika.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Maher Zain"
          description="Ya Nabi Salam Alika"
          audio="./maher_zain_ya_nabi.mp3"
          isPlaying={playingTrack?.src === "./maher_zain_ya_nabi.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Maher Zain"
          description="Ramadhan ya habibi"
          audio="./maher_zain_ramadhan.mp3"
          isPlaying={playingTrack?.src === "./maher_zain_ramadhan.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Maher Zain"
          description="Rahmatulel Alameen"
          audio="./maher_zain_rahmatulelalameen.mp3"
          isPlaying={playingTrack?.src === "./maher_zain_rahmatulelalameen.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />

        <EachMusic
          name="Maher Zain"
          description="Insha' Allah"
          audio="./maher_zain_inshallah.mp3"
          isPlaying={playingTrack?.src === "./maher_zain_inshallah.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Maher Zain"
          audio="./maher_zain_mashallah.mp3"
          isPlaying={playingTrack?.src === "./maher_zain_mashallah.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Sami Yosuf"
          description="Mustafa ya mustafa"
          audio="./sami_yosuf.mp3"
          isPlaying={playingTrack?.src === "./sami_yosuf.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Abdullah Al-Muhdawi"
          description="Ayat al-Fekr"
          audio="./ayat_al_fekr.mp3"
          isPlaying={playingTrack?.src === "./ayat_al_fekr.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Abdullah Al-Muhdawi"
          description="Zamanun Jamilun"
          audio="./abdullah_almuhdawi.mp3"
          isPlaying={playingTrack?.src === "./abdullah_almuhdawi.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />

        <EachMusic
          name="Abdullah Al-Muhdawi"
          description="ya Khaleq yarzuqni"
          audio="./abdullah_almuhdawi_khaleq.mp3"
          isPlaying={playingTrack?.src === "./abdullah_almuhdawi_khaleq.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Abdullah Al-Muhdawi"
          description="Qaalu wa Qaalu"
          audio="./abdullah_almuhdawi_qaloo.mp3"
          isPlaying={playingTrack?.src === "./abdullah_almuhdawi_qaloo.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Abdullah Al-Muhdawi"
          description="Ya man Assayt Allah"
          audio="./abdullah_almuhdawi_yaman_assait.mp3"
          isPlaying={
            playingTrack?.src === "./abdullah_almuhdawi_yaman_assait.mp3"
          }
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Muhammad Al-Muqeet"
          description="Jamal al-Ujood"
          audio="./jamalul_ujod.mp3"
          isPlaying={playingTrack?.src === "./jamalul_ujod.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Massoud Kartes"
          description="Mawlaya sale wa Salem"
          audio="./mawlayasalem.mp3"
          isPlaying={playingTrack?.src === "./mawlayasalem.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Girls Voice"
          description="Shukran ya Rabi Shukran"
          audio="./shukran_ya_rabi.mp3"
          isPlaying={playingTrack?.src === "./shukran_ya_rabi.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />

        <EachMusic
          name="Muhammad Tarek"
          description="Muhammad nabiuna"
          audio="./muhammad_nabiuna.mp3"
          isPlaying={playingTrack?.src === "./muhammad_nabiuna.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Abdullah Mehbob"
          description="Labaik al-Qudsu lana"
          audio="./al_quds.mp3"
          isPlaying={playingTrack?.src === "./al_quds.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Mishary bin-Rashid"
          description="Mustafa mustafa"
          audio="./mustafa.mp3"
          isPlaying={playingTrack?.src === "./mustafa.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
        <EachMusic
          name="Omar Ahmad"
          description="Qamarun seidna Nabi"
          audio="./qamarun.mp3"
          isPlaying={playingTrack?.src === "./qamarun.mp3"}
          setPlayingTrack={handleSetPlayingTrack}
        />
      </div>

      {/* <PlayMusic /> */}

      <br />
      <br />
      <br />
    </>
  );
}

export default Music;
