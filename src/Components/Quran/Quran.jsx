import { NavLink } from "react-router-dom";
import Nav from "../Navbar/Nav";

let QuranCategories = () => {
  const qCategories = [
    { id: 0, name: "Read Quran", path: "/readQuran" },
    { id: 1, name: "Juz", path: "/juz" },
    { id: 2, name: "Sura", path: "/sura" },
    { id: 3, name: "Bookmarks", path: "/bookmarks" },
  ];
  return (
    <>
      <Nav pageName="Quran" />

      <div className="container">
        <div className="categories p-2 ">
          {qCategories.map((category) => (
            <NavLink to={category.path}>
              <div className="common-category some-a">
                <h2 style={{}}>{category.name}</h2>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuranCategories;
