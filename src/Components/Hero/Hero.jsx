import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./Hero.css";

function Hero() {
  return (
    <>
      <section id="hero_section">
        <div class="overlay"></div>
        <div class="content">
          <h1>
            ISLAMIC PLATFORM <br /> FOR ALL MUSLIMS
          </h1>{" "}
          <br />
          <p>
            edufaith is an educational application for obtaining Islamic
            information. This application is controlling by our team developers,
            which aims to provide you with the best information from the most
            reliable sources.
          </p>
          <button className="btn btn-primary hero_learnBtn">
            Learn <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </section>{" "}
      {/* <br /> */}
     
      
    </>
  );
}

export default Hero;
