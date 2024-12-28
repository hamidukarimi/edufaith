import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import "./App.css";

import Index from "./Index";
import Bytes from "./Components/Bytes/Bytes";
import Music from "./Components/Musics/Music";
import Videos from "./Components/Videoss/Videos";
import Haj from "./Components/Haj/Haj";
import Notifications from "./Components/Notifications/Notifications";
import HelpCenter from "./Components/HelpCenter/HelpCenter";
import Nav from "./Components/Navbar/Nav";
import Hadiths from "./Components/Hadiths/Hadiths";
import Companions from "./Components/Hadiths/Companions";
import Sidebar from "./Components/Sidebar/Sidebar";
import AllahNames from "./Components/AllahNames/AllahNames";
import Tasbeeh from "./Components/Tasbeeh/Tasbeeh";

import IslamicBattles from "./Components/IslamicBattles/IslamicBattles";
import EduAlert from "./Components/EsuAlert/EduAlert";
import Qibla from "./Components/ExtraComponents/Qibla";
import ChooseCountry from "./Components/ExtraComponents/ChooseCountry";
import ErrorPage from "./Components/ExtraComponents/ErrorPage";
import IslamicQuestions from "./Components/IslamicQuestions/IslamicQuestions";
import Settings from "./Components/Settings/Settings";
import Dua from "./Components/Hadiths/Dua";
import IslamicImages from "./Components/IslamicImages/IslamicImages";
import CoreTeachings from "./Components/CoreTeachings/CoreTeachings";
import QuranCategories from "./Components/Quran/Quran";
import ReadQuran from "./Components/Quran/ReadQuran";
import Juz from "./Components/Quran/Juz";
import Sura from "./Components/Quran/Sura";
import Favorites from "./Components/Quran/Bookmarks";

function App() {
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

  const [them, setThem] = useState("light");

  useEffect(() => {
    document.documentElement.className = them;
  }, [them]);

  const toggleTheme = () => {
    setThem(them === "light" ? "dark" : "light");
  };

  return (
    <>
      {/* <div>
      <button style={{position: "fixed", top: "12rem", left: "20rem", zIndex: "999" }} className="btn btn-primary " onClick={toggleTheme}>Swithch to {them === "light" ? "dark" : "light"} mode</button>
    </div> */}

      {loading ? (
        <div className="loading_page">
          <Spinner id="spinner" animation="border" role="status"></Spinner>
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bytes" element={<Bytes />} />
            {/* <Route path="/bytes" element={<Favorites />} /> */}
            <Route path="/music" element={<Music />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/islamicImages" element={<IslamicImages />} />
            <Route path="/islamicQuestions" element={<IslamicQuestions />} />
            <Route path="/haj" element={<Haj />} />
            <Route path="/helpCenter" element={<HelpCenter />} />

            <Route path="/quranCategories" element={<QuranCategories />} />
            <Route path="/readQuran" element={<ReadQuran />} />
            <Route path="/juz" element={<Juz />} />
            <Route path="/sura" element={<Sura />} />
            <Route path="/bookmarks" element={<Favorites />} />
            <Route path="/companions" element={<Companions />} />
            <Route path="/hadiths" element={<Hadiths />} />
            <Route path="/dua" element={<Dua />} />
            <Route path="/coreTeachings" element={<CoreTeachings />} />
            <Route path="/allahNames" element={<AllahNames />} />
            <Route path="/tasbeeh" element={<Tasbeeh />} />
            <Route path="/islamicBattles" element={<IslamicBattles />} />
            <Route path="/qibla" element={<Qibla />} />
            <Route path="/settings" element={<Settings />} />

            <Route path="/notifications" element={<Notifications />} />
            <Route path="/eduAlert" element={<EduAlert />} />
            <Route path="/404error" element={<ErrorPage />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
