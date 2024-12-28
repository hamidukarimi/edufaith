import { useState, useEffect } from "react";
import "./Categories.css";
import EduAlert from "../EsuAlert/EduAlert";
import Overlay from "../Overlay/Overlay";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

function Categories() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getUsers() {
      try {
        const result = await axios(
          // "https://jsonplaceholder.typicode.com/users"
          ""
        );
        setUsers(result.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    }
    getUsers();
  }, []);

  const [showAlert, setShowAlert] = useState(false);
  const handleAlert = () => {
    setShowAlert(true);
  };
  const closeAlert = () => {
    setShowAlert(false);
  };

  const categories = [
    // {
    //   objectId: 1,
    //   image: "./Quran.png",
    //   name: "Read Quran",
    //   nameTwo: "اقرأ القرآن",
    //   path: "",
    // },
    {
      objectId: 1,
      image: "./sahaba.png",
      name: "Companions",
      nameTwo: "أصحاب رسول الله",
      path: "/companions",
    },
    {
      objectId: 2,
      image: "./hadith.png",
      name: "Hadiths",
      nameTwo: "أحاديث",
      path: "/hadiths",
    },
    {
      objectId: 3,
      image: "./Dua.png",
      name: "Dua",
      nameTwo: "الدغاء",
      path: "/dua",
    },
    {
      objectId: 4,
      image: "./book-icon.png",
      name: "Core Teachings",
      nameTwo: "التعالیم الجوهریة",
      path: "/coreTeachings",
    },
    {
      objectId: 5,
      image: "./qibla.png",
      name: "Qibla Direction",
      nameTwo: "اتجاه القبلة",
      path: "/qibla",
    },
    {
      objectId: 6,
      image: "./allah.png",
      name: "Allah Names",
      nameTwo: "أسماء الحسنی",
      path: "/allahNames",
    },
    {
      objectId: 7,
      image: "./tasbeeh.png",
      name: "Tasbeeh",
      nameTwo: "تسبیح",
      path: "/tasbeeh",
    },
    {
      objectId: 8,
      image: "./battle-icon.png",
      name: "Islamic Battles",
      nameTwo: "الغزوات الإسلامية",
      path: "/islamicBattles",
    },
    {
      objectId: 9,
      image: "./kaaba.png",
      name: "Hajj",
      nameTwo: "حج",
      path: "/haj",
    },
  ];

  return (
    <>
      {loading ? (
        <div className="videoLoading">
          <div className="bytes_spinner"></div>
        </div>
      ) : (
        <section className="indexCategories">
          <h1>Categories</h1>

          <div className="categories-parent">
            <NavLink to="./quranCategories">
              <div className="quran-div">
                <img
                  style={{ width: "83px" }}
                  className="card-img"
                  src="./Quran.png"
                  alt=""
                />
                <h1 style={{ marginTop: "7px" }}>اقرأ القرآن</h1>
              </div>
            </NavLink>

            <div style={{}} id="categoriesParent">
              {categories.map((category) => (
                <NavLink key={category.objectId} to={category.path}>
                  <div className="category some-a">
                    <div className="category-img-parent">
                      <div className="category-img">
                        <img className="card-img" src={category.image} alt="" />
                      </div>
                    </div>
                    <p>{category.name}</p>
                    <p>{category.nameTwo}</p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>
      )}

      {showAlert && (
        <EduAlert
          alertMessage="Sorry! You can't access this feature right now. Please try again later."
          closeAlert={closeAlert}
        />
      )}
      {showAlert ? <Overlay /> : ""}
    </>
  );
}

export default Categories;
