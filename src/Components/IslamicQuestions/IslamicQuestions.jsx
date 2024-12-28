import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import "./IslamicQuestions.css";
import Header from "../Header/Header";
import Menus from "../Menus/Menus";

// let IslamicQuestions = () => {
//     const [activeIndex, setActiveIndex] = useState(null);

//     const toggleAccordion = (index) => {
//       setActiveIndex(activeIndex === index ? null : index);
//     };

//   return (
//     <>
//       <Header />
//       <Menus />
//       <div className="container pt-3">
//         <h1 style={{ fontWeight: "bold", marginTop: "20px" }}>
//           Islamic Questions
//         </h1>
//         <p>
//           Here are some of the most important and populer islamic questions with
//           the most reaileble Answeres.
//         </p>

//       </div>
//     </>
//   );
// };

// export default IslamicQuestions;

const IslamicQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <Menus />
      <div className="container isQuesContainer pt-3">
        <h1 className="fw-bold mt-4">Islamic Questions</h1>
        <p>
          Explore the most popular and essential Islamic questions with trusted,
          reliable answers.
        </p>

        <div className="accordion">
          <AccordionItem
            title="Accordion Item #1"
            question1="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question2="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question3="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question4="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            isActive={activeIndex === 0}
            onClick={() => toggleAccordion(0)}
          />

          <AccordionItem
            title="Accordion Item #2"
            question1="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question2="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question3="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question4="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            isActive={activeIndex === 1}
            onClick={() => toggleAccordion(1)}
          />

          <AccordionItem
            title="Accordion Item #3"
            question1="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question2="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question3="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question4="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            isActive={activeIndex === 2}
            onClick={() => toggleAccordion(2)}
          />

          <AccordionItem
            title="Accordion Item #3"
            question1="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question2="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question3="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question4="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            isActive={activeIndex === 3}
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            title="Accordion Item #3"
            question1="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question2="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question3="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question4="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            isActive={activeIndex === 4}
            onClick={() => toggleAccordion(4)}
          />

          <AccordionItem
            title="Accordion Item #3"
            question1="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question2="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question3="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question4="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            isActive={activeIndex === 5}
            onClick={() => toggleAccordion(5)}
          />

          <AccordionItem
            title="Accordion Item #3"
            question1="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question2="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question3="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            question4="Lorem ispum doller sign is something diffent but i think this is the problem?"
            answer4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            isActive={activeIndex === 6}
            onClick={() => toggleAccordion(6)}
          />
        </div>
      </div>

      <br />
      <br />
    </>
  );
};

// AccordionItem Component
const AccordionItem = ({
  title,
  question1,
  question2,
  question3,
  question4,
  answer1,
  answer2,
  answer3,
  answer4,
  isActive,
  onClick,
}) => {
  return (
    <div className={`accordion-item ${isActive ? "active" : ""}`}>
      <div className="accordion-header" onClick={onClick}>
        {title}
        <span className="fs-4">
          <FontAwesomeIcon
            style={{
              transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.4s ease",
            }}
            icon={faAngleUp}
          />
        </span>
      </div>
      <div
        className="accordion-body"
        style={{
          maxHeight: isActive ? "600px" : "0",
          padding: isActive ? "15px 20px" : "0 20px",
        }}
      >
        <div className="accordion-body-content">
          <p className="fs-3 fw-bold">{question1}</p>
          <hr />
          <p className="fs-5">{answer1}</p>
          <hr />
          <br />

          <p className="fs-3 fw-bold">{question2}</p>
          <hr />
          <p className="fs-5">{answer2}</p>
          <hr />
          <br />

          <p className="fs-3 fw-bold">{question3}</p>
          <hr />
          <p className="fs-5">{answer3}</p>
          <hr />
          <br />

          <p className="fs-3 fw-bold">{question4}</p>
          <hr />
          <p className="fs-5">{answer4}</p>
          <hr />
          <br />
        </div>
      </div>
    </div>
  );
};

export default IslamicQuestions;
