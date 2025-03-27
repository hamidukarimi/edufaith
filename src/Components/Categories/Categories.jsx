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

  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
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

  const quranCategory = {
      objectId: 0,
      image: "./Quran.png",
      name: "Read Quran",
      nameTwo: "اقرأ القرآن",
      path: "/quranCategories",
    }

  const filteredItems = categories.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {loading ? (
        <div className="videoLoading">
          <div className="bytes_spinner"></div>
        </div>
      ) : (
        <section className="indexCategories">

        
       
          
          <input
            type="search"
            className="input"
            placeholder="Search for a category"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        
        


          <h1>Categories</h1>

           <div> {/*categories-parent */}
            {/* <NavLink to="./quranCategories">
              <div className="quran-div">
                <img
                   
                  className="qur_div_icon"
                  src="./Quran.png"
                  alt=""
                />
                <p className="mt-2" >اقرأ القرآن</p>
              </div>
            </NavLink> */}

            

            




            {searchQuery ? (
              <div>

            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (

            <div style={{}} id="categoriesParent">

                <NavLink  to={item.path}>
                  <div className="category some-a">
                    <div className="category-img-parent">
                      <div className="category-img">
                        <img className="card-img" src={item.image} alt="" />
                      </div>
                    </div>
                    <p>{item.name}</p>
                    <p>{item.nameTwo}</p>
                  </div>
                </NavLink>

                </div>
              ))
            ) : (
              <div style={{width: "100%", height: "100px", position: "relative",}}>
                <p style={{color: "#b9b9b9", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",  textAlign: "center"}} className=" fs-2 ">No items found</p>
              </div>
            )}
          </div>
            /* up to here corrct */
               
              ) : (
           
             <>

             <NavLink to={quranCategory.path}>
              <div className="quran-div">
                <img
                   
                  className="qur_div_icon"
                  src={quranCategory.image}
                  alt=""
                />
                <p className="mt-2" >{quranCategory.name}</p>
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
             </>
            )}

              
           
          </div>
        </section>
      )}

      
    </>
  );
}

export default Categories;
