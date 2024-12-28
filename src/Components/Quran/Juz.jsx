import { NavLink } from "react-router-dom";
import Nav from "../Navbar/Nav";
 
let Juz = () => {
  const juzs = [
    { id: 0, name: "JUZ 1", description: "الْحَمْدُ", path: "/ReadQuran#12", },
    { id: 1, name: "JUZ 2", description: "الْحَمْدُ", path: "/ReadQuran#13", },
    { id: 2, name: "JUZ 3", description: "الْحَمْدُ", path: "/ReadQuran#14", },
    { id: 3, name: "JUZ 4", description: "الْحَمْدُ", path: "", },
  ];
  return (
    <>
       <Nav pageName="JUZ"/>

      <div className="container">
        <div className="py-4">
          {juzs.map((juz) => (
            <NavLink to={juz.path}>
              <div
                className="w-100 p-3 fs-3 border d-flex justify-content-between align-items-center mb-3"
                key={juz.id}
              >
                <span>{juz.name}</span>

                <span>{juz.description}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Juz;
