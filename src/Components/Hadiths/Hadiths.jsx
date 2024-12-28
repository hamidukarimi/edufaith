import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faBook, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

import Nav from "../Navbar/Nav";
import "./Hadiths.css";
import { text } from "@fortawesome/fontawesome-svg-core";

let TheBook = ({ name, number, text, list1, list2, closePage, }) => {
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
        <div className="cardsParent">
          <div className="card">
            <div className="card-head">
              <p className="c-number">{number}</p>
              <span className="copy">
                <FontAwesomeIcon icon={faCopy} />
              </span>
            </div>
            <p className="card-text">{text}</p>
            <br />
            <p>{list1}</p>
            <p>{list2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

let Hadith = ({ name, number, text, list1, list2 }) => {
  const [theBookOpen, setTheBookOpen] = useState(false);
  const handleBook = () => {
    setTheBookOpen(true);
  };
  const closeBook = () => {
    setTheBookOpen(false);
  };

  return (
    <>
      <div onClick={handleBook} className="common-category some-a">
        <FontAwesomeIcon className="fs-1 text-warning pb-2" icon={faBook} />
        <h2 style={{ fontFamily: "'Amiri', serif", fontWeight: "bold" }}>
          {name}
        </h2>
      </div>

      {theBookOpen && (
        <TheBook
          name={name}
          number={number}
          text={text}
          list1={list1}
          list2={list2}
          closePage={closeBook}
        />
      )}
    </>
  );
};

function Hadiths() {
  const callHadith = [
    {
      id: 0,
      name: "صحيح البخاري",
      number: 1,
      text: `حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مُسْلِمٍ، حَدَّثَنَا مَالِكٌ، عَنْ
          هِشَامِ بْنِ عُرْوَةَ، عَنْ أَبِيهِ، عَنْ عَائِشَةَ، قَالَتْ قَالَ
          رَسُولُ اللَّهِ صلى الله عليه وسلم: "إِذَا مَاتَ الْإِنْسَانُ
          انْقَطَعَ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ، إِلَّا مِنْ صَدَقَةٍ
          جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو
          لَهُ`,
      list1: "Sahih al-bukhari 1386",
      list2: "صحيح البخاري ۱۳۸۶",
    },
    {
      id: 1,
      name: "صحيح مسلم",
      number: 1,
      text: " ",
      list1: " ",
      list2: " ",
    },
    {
      id: 2,
      name: "سنن الترمذي",
      number: 1,
      text: " ",
      list1: " ",
      list2: " ",
    },
    {
      id: 3,
      name: "سنن أبي داود",
      number: 1,
      text: " ",
      list1: " ",
      list2: " ",
    },
    {
      id: 4,
      name: "سنن ابن ماجه",
      number: 1,
      text: " ",
      list1: " ",
      list2: " ",
    },
    {
      id: 5,
      name: "نن النسائي",
      number: 1,
      text: " ",
      list1: " ",
      list2: " ",
    },
  ];

  return (
    <>
      <Nav pageName="Hadiths" />

      <div className="container">
        <div className="categories p-2 ">
          {callHadith.map((callCurrent) => (
            <Hadith
              name={callCurrent.name}
              number={callCurrent.number}
              text={callCurrent.text}
              list1={callCurrent.list1}
              list2={callCurrent.list2}
            />
          ))}
        </div>
      </div>
    </>
  );
}
 

export default Hadiths;
