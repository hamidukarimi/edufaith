import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faBookOpen,
  faHighlighter,
  faBookmark,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect } from "react";
import Nav from "../Navbar/Nav";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(storedBookmarks);
  }, []);

  // Handle removing from bookmarks
  const handleRemoveFavorite = (cardToRemove) => {
    const updatedBookmarks = bookmarks.filter(
      (card) => card.id !== cardToRemove.id
    );
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return (
    <>
      <Nav pageName="Bookmarks" />
      <div>
        <div className="bookmarks">
          {bookmarks.length > 0 ? (
            bookmarks.map((card) => (
              <>
                <div className="container">
                  <div style={{ padding: "28px 0" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: "20px",
                          fontSize: "19px",
                          padding: "18px 3px",
                        }}
                      >
                        {/* <p>1:1</p> */}
                        <FontAwesomeIcon icon={faCopy} />
                        {/* <FontAwesomeIcon
                            onClick={handleTafseerAyah}
                          icon={faBookOpen}
                        /> */}
                        <FontAwesomeIcon
                          //   style={{
                          //     color: isHighLighted ? "dodgerblue" : "",
                          //   }}
                          //   onClick={handleHighLightClick}
                          icon={faHighlighter}
                        />
                      </div>
                      <div
                        onClick={() => handleRemoveFavorite(card)}
                        className="fs-5 text-warning"
                      >
                        <FontAwesomeIcon icon={faBookmark} />
                      </div>
                    </div>
                    <div className="my-3 currentAyahParent">
                      <p>{card.currentAyah}</p>
                    </div>
                    <div style={{ fontSize: "23px" }}>
                      <p>{card.translation}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              </>
            ))
          ) : (
            <div
              style={{
                fontSize: "23px",
                textAlign: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <FontAwesomeIcon
                className="fs-1 text-warning"
                icon={faBookmark}
              />
              <p>No bookmarks yet!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
