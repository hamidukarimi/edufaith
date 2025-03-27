import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faBookOpen,
  faHighlighter,
  faBookmark,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./ReadQuran.css";
import Nav from "../Navbar/Nav";

let Ayah = ({ currentAyah, translation, tafseer, handleFunc }) => {
  const [tafseerAyahOpen, setTafseerAyahOpen] = useState(false);
  const handleTafseerAyah = () => {
    setTafseerAyahOpen(true);
  };
  const closeTafseerAyah = () => {
    setTafseerAyahOpen(false);
  };

  const [isHighLighted, setIsHighLighted] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem("isHighlighted");
    if (savedState) {
      setIsHighLighted(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isHighlighted", JSON.stringify(isHighLighted));
  });

  const handleHighLightClick = () => {
    setIsHighLighted(!isHighLighted);
  };

  const highLightStyle = isHighLighted ? { color: "rgb(255, 196, 0)" } : {};

  return (
    <>
      <div style={{ padding: "28px 0" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              fontSize: "19px",
              padding: "18px 3px",
            }}
          >
            {/* <p>1:1</p> */}
            <FontAwesomeIcon style={{cursor: "pointer"}} icon={faCopy} />
            <FontAwesomeIcon style={{cursor: "pointer"}} onClick={handleTafseerAyah} icon={faBookOpen} />
            <FontAwesomeIcon 
              style={{
                color: isHighLighted ? "dodgerblue" : "", cursor: "pointer"
              }}
              onClick={handleHighLightClick}
              icon={faHighlighter}
            />
          </div>
          <div onClick={handleFunc} style={{ fontSize: "19px" }}>
            <FontAwesomeIcon style={{cursor: "pointer"}} icon={faBookmark} />
          </div>
        </div>
        <div className="my-3 currentAyahParent">
          <p style={highLightStyle}>{currentAyah}</p>
        </div>
        <div style={{ fontSize: "23px" }}>
          <p>{translation}</p>
        </div>
      </div>
      <hr />

      {tafseerAyahOpen && (
        <TafseerAyah
          currentAyah={currentAyah}
          translation={translation}
          tafseer={tafseer}
          handleFunc={handleFunc}
          closePage={closeTafseerAyah}
        />
      )}
    </>
  );
};

let ReadQuran = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [cards, setCards] = useState([
    {
      id: 0,
      currentAyah: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②",
      translation: "Thi is an example text",
      tafseer: "this is an example text for the tafseer placeholder",
    },
    {
      id: 1,
      currentAyah: "الرحمن الرحیم ②",
      translation: "Thi is an example text",
      tafseer: "this is also an example text, but for second ayah.",
    },
    {
      id: 2,
      currentAyah: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②",
      translation: "Thi is an example text",
      tafseer: "this is an example text for the tafseer placeholder",
    },
    {
      id: 3,
      currentAyah: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②",
      translation: "Thi is an example text",
      tafseer: "this is an example text for the tafseer placeholder",
    },
    {
      id: 4,
      currentAyah: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②",
      translation: "Thi is an example text",
      tafseer: "this is an example text for the tafseer placeholder",
    },
  ]);

  const handleAddToFavorite = (card) => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    if (!bookmarks.some((book) => book.id === card.id)) {
      bookmarks.push(card);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  };

  return (
    <>
      <Nav pageName="Al-Quran" />
      <div className="container">
        <p className="currentAyahParent text-center pt-5">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </p>
        <hr />

        {cards.map((card) => (
          <div key={card.id}>
            <Ayah
              currentAyah={card.currentAyah}
              translation={card.translation}
              tafseer={card.tafseer}
              handleFunc={() => handleAddToFavorite(card)}
            />
          </div>
        ))}

        {/* <Ayah
          currentAyah="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②"
          translation="This is an example text tht i see"
          tafseer="Really this is for the ayah's tafseer"
        />
        <Ayah
          currentAyah="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②"
          translation="This is an example text tht i see"
          tafseer="Really this is for the ayah's tafseer"
        />
        <Ayah
          currentAyah="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②"
          translation="This is an example text tht i see"
          tafseer="Really this is for the ayah's tafseer"
        />
        <Ayah
          currentAyah="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②"
          translation="This is an example text tht i see"
          tafseer="Really this is for the ayah's tafseer"
        />
        <span id="13"></span>

        <Ayah
          currentAyah="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②"
          translation="This is an example text tht i see"
          tafseer="Really this is for the ayah's tafseer"
        />
        <Ayah
          currentAyah="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②"
          translation="This is an example text tht i see"
          tafseer="Really this is for the ayah's tafseer"
        />
        <Ayah
          currentAyah="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②"
          translation="This is an example text tht i see"
          tafseer="Really this is for the ayah's tafseer"
        />

        <p className="currentAyahParent text-center pt-5">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ{" "}
        </p>

        <Ayah
          currentAyah="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②"
          translation="This is an example text tht i see"
          tafseer="Really this is for the ayah's tafseer"
        />
        <Ayah
          currentAyah="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②"
          translation="This is an example text tht i see"
          tafseer="Really this is for the ayah's tafseer"
        />
        <Ayah
          currentAyah="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②"
          translation="This is an example text tht i see"
          tafseer="Really this is for the ayah's tafseer"
        />
        <Ayah
          currentAyah="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②"
          translation="This is an example text tht i see"
          tafseer="Really this is for the ayah's tafseer"
        />
        <span id="12"></span>

        <Ayah
          currentAyah="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②"
          translation="This is an example text tht i see"
          tafseer="Really this is for the ayah's tafseer"
        />
        <Ayah
          currentAyah="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②"
          translation="This is an example text tht i see"
          tafseer="Really this is for the ayah's tafseer"
        />
        <Ayah
          currentAyah="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②"
          translation="This is an example text tht i see"
          tafseer="Really this is for the ayah's tafseer"
        />
        <Ayah
          currentAyah="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②"
          translation="This is an example text tht i see"
          tafseer="Really this is for the ayah's tafseer"
        />
        <Ayah
          currentAyah="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②"
          translation="This is an example text tht i see"
          tafseer="Really this is for the ayah's tafseer"
        />
        <span id="14"></span>

        <Ayah
          currentAyah="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ②"
          translation="This is an example text tht i see"
          tafseer="Really this is for the ayah's tafseer"
        /> */}
      </div>
    </>
  );
};

let TafseerAyah = ({ currentAyah, translation, tafseer, closePage }) => {
  return (
    <section style={{ overflowY: "scroll" }} className="openPagesFixComponent">
      <div className="itsCloseNav">
        <FontAwesomeIcon
          onClick={closePage}
          className="fs-1"
          style={{ cursor: "pointer" }}
          icon={faArrowLeft}
        />
      </div>

      <div className="container">
        <div className="currentAyahParent mt-3 text-center">
          <p>{currentAyah}</p>
        </div>
        <p className="fs-3 text-center">{translation}</p>

        <p className="fs-3 text-center mt-5">TAFSEER</p>
        <hr />
        <p className="fs-3 text-center">{tafseer}</p>
      </div>
    </section>
  );
};

export default ReadQuran;
