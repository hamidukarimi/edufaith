import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";

function Nav({ pageName }) {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <nav className="navbar  d-flex justify-content-start">
        <div className="iconPageName go-back-div">
          <span onClick={goBack} className="go-back">
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
        </div>
        <p className="iconPageName">{pageName}</p>
      </nav>
    </>
  );
}

export default Nav;
