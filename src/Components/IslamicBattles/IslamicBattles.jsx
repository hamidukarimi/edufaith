import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./IslamicBattles.css";
import Nav from "../Navbar/Nav";

let Battle = ({
  tittle,
  list1,
  list2,
  list3,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  closePage,
}) => {
  return (
    <>
      {/* <Nav pageName="Battle of Badr" /> */}

      <section
        style={{ overflowY: "scroll" }}
        className="openPagesFixComponent"
      >
        <div className="itsCloseNav">
          <FontAwesomeIcon
            onClick={closePage}
            className="fs-1"
            style={{ cursor: "pointer" }}
            icon={faArrowLeft}
          />
        </div>

        <div className="container">
          <div className="BattleTittle">{tittle}</div>

          <div className="questionsDiv">
            <hr />
            <p>{list1}</p>
            <p>{list3}</p>
            <p>{list2}</p>
            <hr />
          </div>
          
          <div id="textDiv" className="fs-5">
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
            <p>{text4}</p>

            <p>{text5}</p>
            <p>{text6}</p>
          </div>
        </div>
      </section>
    </>
  );
};

let Category = ({
  tittle,
  list1,
  list2,
  list3,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
}) => {
  const [battleOpen, setBattleOpen] = useState(false);
  const handleBattle = () => {
    setBattleOpen(true);
  };
  const closeBattle = () => {
    setBattleOpen(false);
  };

  return (
   <>
     <div
      onClick={handleBattle}
      className="common-category some-a h-auto text-center d-block"
    >
      <div>
        <img width="60" src="./battle-icon.png" />
        <h2>{tittle}</h2>
      </div>

      
    </div>

{battleOpen && (
  <Battle
    tittle={tittle}
    list1={list1}
    list2={list2}
    list3={list3}
    text1={text1}
    text2={text2}
    text3={text3}
    text4={text4}
    text5={text5}
    text6={text6}
    closePage={closeBattle}
  />
)}
   </>
  );
};

function IslamicBattles() {
  const callCategories = [
    {
      id: 0,
      tittle: "غزوة بدر",
      list1: "What is Badr BAttle in Islam?",
      list2: "This isthe second question.",
      list3: "This is the third question in Islam",
      text1:
        "Lorem Ispum doller sign is something that we cannot do them but in this way we can say diffrent things, so we shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try.  shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try.",
      text2:
        "shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try.shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try.shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try.shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try.",
      text3:
        "shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. ",
      text4:
        "shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. ",
      text5:
        "shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything,  ",
      text6:
        "shoud do lts of  things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. ",
    },



    {
      id: 1,
      tittle: "غزوة أحد",
      list1: "What is Badr BAttle in Islam?",
      list2: "This isthe second question.",
      list3: "This is the third question in Islam",
      text1:
        "Lorem Ispum doller sign is something that we cannot do them but in this way we can say diffrent things, so we shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try.  shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try.",
      text2:
        "shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try.shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try.shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try.shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try.",
      text3:
        "shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. ",
      text4:
        "shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. ",
      text5:
        "shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything,  ",
      text6:
        "shoud do lts of  things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. shoud do lts of things that we never undrestand everything, but remember them in this way we can do lots of workds in this try. ",
    },
  ];

  return (
    <>
      <Nav pageName="Islamic Battles" />
      <div className="container">
        <div className="p-2">
          <div className="categories">
            {callCategories.map((callCategory) => (
              <div key={callCategory.id}>
                <Category
                  tittle={callCategory.tittle}
                  list1={callCategory.list1}
                  list2={callCategory.list2}
                  list3={callCategory.list3}
                  text1={callCategory.text1}
                  text2={callCategory.text2}
                  text3={callCategory.text3}
                  text4={callCategory.text4}
                  text5={callCategory.text5}
                  text6={callCategory.text6}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default IslamicBattles;
