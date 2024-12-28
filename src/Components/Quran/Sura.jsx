import { NavLink } from "react-router-dom";
import Nav from "../Navbar/Nav";

let Sura = () => {
  const suras = [
    { id: 0, name: "SURA 1", description: "", path: "/ReadQuran#12" },
    { id: 1, name: "JUZ 2", description: "", path: "/ReadQuran#13" },
    { id: 2, name: "JUZ 3", description: "", path: "/ReadQuran#14" },
    { id: 3, name: "JUZ 4", description: "", path: "" },
  ];

  return (
    <>
      <Nav pageName="JUZ" />

      <div className="container">
        <div className="py-4">
          {suras.map((sura) => (
            <NavLink to={sura.path}>
              <div
                className="w-100 p-3 fs-3 border d-flex justify-content-between align-items-center mb-3"
                key={sura.id}
              >
                <span>{sura.name}</span>

                <span>{sura.description}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sura;
