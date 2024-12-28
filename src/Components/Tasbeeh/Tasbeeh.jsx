import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFingerprint,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "./Tasbeeh.css";

import Nav from "../Navbar/Nav";

function Tasbeeh() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  const [selectedTasbeeh, setSelectedTasbeeh] = useState(null);

  const handleClick = (tasbeehType) => {
    setSelectedTasbeeh(tasbeehType);
  };

  const tasbeehTypes = [
    {
      id: 1,
      text: "سُبْحَانَ اللهِ وَبِحَمْدِهِ",
    },
    {
      id: 2,
      text: "الْحَمْدُ للهِ",
    },
    {
      id: 3,
      text: "لا إلهَ إلا اللهُ",
    },
    {
      id: 4,
      text: "اللهُ أكْبَرُ",
    },
    {
      id: 5,
      text: "سُبْحَانَ اللهِ العَظِيمِ وَبِحَمْدِهِ",
    },
    {
      id: 6,
      text: "أستغفر الله",
    },
    {
      id: 7,
      text: "لا حَوْلَ وَلا قُوَّةَ إِلاَّ بِاللهِ",
    },
    {
      id: 8,
      text: "لا إلهَ إلا أنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    },
    {
      id: 9,
      text: "حَسْبُنَا اللّهُ وَنِعْمَ الْوَكِيلُ",
    },
    {
      id: 10,
      text: "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ",
    },
    {
      id: 11,
      text: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
    },
    {
      id: 12,
      text: "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا",
    },
    {
      id: 13,
      text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ",
    },
    {
      id: 14,
      text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ",
    },
    {
      id: 15,
      text: "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي",
    },
    {
      id: 16,
      text: "اللَّهُمَّ بَارِكْ لِي فِيمَا أَعْطَيْتَ",
    },
    {
      id: 17,
      text: "اللَّهُمَّ إنِّي أَسْأَلُكَ العَفْوَ وَالعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ",
    },
    {
      id: 18,
      text: "رَضِيتُ بِاللَّهِ رَبَّاً وَبِالإِسْلاَمِ دِيناً وَبِمُحَمَّدٍ نَبِياً",
    },
    {
      id: 19,
      text: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    },
    {
      id: 20,
      text: "اللَّهُمَّ إنِّي أَسْأَلُكَ عِلْمَاً نَافِعَاً وَرِزْقَاً طَيِّبَاً وَعَمَلاً مُتَقَبَّلاً",
    },
  ];

  const styleForScrollBtns = {
    top: "45px",
    backgroundColor: "transparent",
    color: "white",
    border: "none",
    fontSize: "55px",
  };

  const ScrollRight = () => {
    const tasbeehDivForScroll = document.querySelector(".tasbeehDivForScroll");
    tasbeehDivForScroll.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    const tasbeehDivForScroll = document.querySelector(".tasbeehDivForScroll");
    tasbeehDivForScroll.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="tasbeeh-body">
        <Nav pageName="Tasbeeh" />

        <div className="container">
          <section id="tas-main">
            <div className="d-flex justify-content-center">
              <div className="show-tasbeeh-screen">
                {selectedTasbeeh ? <span>{selectedTasbeeh.text}</span> : "مرحبا"}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
              className="d-none d-lg-flex"
            >
              <button
                onClick={scrollLeft}
                className="b-scroll-btns"
                id="bytes_scroll_btn_left"
                style={{ ...styleForScrollBtns, right: "45px" }}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
              <button
                onClick={ScrollRight}
                className="b-scroll-btns"
                id="bytes_scroll_btn_right"
                style={{ ...styleForScrollBtns, left: "36px" }}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>

            <div className="tasbeehDivForScroll tasbeeh-parent w-auto justify-content-start">
              {tasbeehTypes.map((tasbeehType) => (
                <div
                  onClick={() => handleClick(tasbeehType)}
                  style={{
                    backgroundColor:
                      selectedTasbeeh?.id === tasbeehType.id
                        ? "orange"
                        : "black",
                    transition: "0.2s ease",
                  }}
                  className="tasbeeh-types"
                >
                  {tasbeehType.text}
                </div>
              ))}
            </div>

            <div id="specific_element" className="tasbeeh-parent">
              <div className="tasbeeh-number">{count}</div>
            </div>

            <div id="specific_element2" className="tasbeeh-parent">
              <span
                onClick={handleCount}
                id="count"
                style={{ fontSize: "75px" }}
                className="text-success "
              >
                <FontAwesomeIcon icon={faFingerprint} />
              </span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Tasbeeh;
