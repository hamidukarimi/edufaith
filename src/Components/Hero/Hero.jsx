import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import "./Hero.css";

function Hero() {
    return (
        
      <>
        <section id="hero_section">
      <div class="overlay"></div>
      <div class="content">
          <h1>ISLAMIC PLATFORM <br/> FOR ALL MUSLIMS</h1> <br/>
          <p>EduFaith is an educational application for obtaining Islamic information. This application is controlling by our team developers, which aims to provide you with the best information from the most reliable sources.</p>
          <button className="btn btn-primary">Learn <FontAwesomeIcon icon={faArrowRight}/></button>
      </div>
    </section> <br/>
    <section class="main-section">
        <div className="input_div d-lg-none"> <input type="search" className="input" placeholder="What are you looking for?" required/> <button type="submit" className="input_submit"> <img src="./Search.png" width="30"/> </button></div>
      </section>
      <br/><br/>
      </>
    )
}

export default Hero;