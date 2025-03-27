import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import Nav from "../Navbar/Nav";
import "./HelpCenter.css";
import { NavLink } from "react-router-dom";

function HelpCenter() {
  return (
    <>
      <Nav pageName="Help Center" />

      <div className="container">
        <div className="top-div">
          <h1 className="fw-bold text-light fs-1" >
            Help Center
          </h1>

          <NavLink to="/">
            <span>
              <h5 className="mt-5 text-light" >
                <span>
                  <FontAwesomeIcon icon={faCaretLeft} />
                </span>{" "}
                Back to Main
              </h5>
            </span>
          </NavLink>
        </div>

        <div className="help-center-container">
          <form id="helpForm">
            <div className="form-group">
              <label className="help-label" for="name">
                Name:
              </label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name here"
                required
              />
            </div>
            <div className="form-group">
              <label className="help-label" for="email">
                Email:
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email here"
                required
              />
            </div>
            <div className="form-group">
              <label className="help-label" for="phone">
                Phone Number:
              </label>
              <input
                className="form-input"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number here"
              />
            </div>
            <div className="form-group">
              <label className="help-label" for="query">
                Your Message:
              </label>
              <textarea
                className="help-textarea h-auto" 
                id="query"
                name="query"
                rows="4"
                placeholder="Tell us your message"
                required
              ></textarea>
            </div>
            <button className=" btn btn-primary  p-2" id="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default HelpCenter;
