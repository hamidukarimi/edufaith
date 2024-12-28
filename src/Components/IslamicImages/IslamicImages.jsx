import React, { useState, useRef, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faShare,
  faClose,
  faExclamationTriangle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import {
  faHeart as faSolidHeart,
  faBookmark as faSolidBookmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faRegularHeart,
  faBookmark as faRegularBookmark,
} from "@fortawesome/free-regular-svg-icons";

import "./IslamicImages.css";
import Header from "../Header/Header";
import Menus from "../Menus/Menus";

export let OpenImage = ({ image, url, description, closePage }) => {
  const [love, setLove] = useState();
  const [isLoving, setIsLoving] = useState(true);
  const [isFavoriting, setIsFavoriting] = useState(true);
  const handleLove = () => {
    if (isLoving) {
      setLove(love + 1);
    } else {
      setLove(love - 1);
    }
    setIsLoving(!isLoving);
  };
  const handleFavorite = () => {
    if (isFavoriting) {
      setLove(love + 1);
    } else {
      setLove(love - 1);
    }
    setIsFavoriting(!isFavoriting);
  };

  // const handleDownload = () => {
  //   const link = document.createElement('a');
  //   link.href = image; // Use the image URL here
  //   link.download = image.split('/').pop(); // Use the image file name for the download
  //   link.click();
  // };

  const handleDownload = async () => {
    try {
      const response = await fetch(image); // Fetch the image from the URL
      const blob = await response.blob(); // Create a Blob from the image data
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob); // Create an object URL for the blob
      link.download = image.split("/").pop(); // Use the image file name for the download
      link.click(); // Trigger the download
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  const [showReportModal, setShowReportModal] = useState(false);
  const [reportReason, setReportReason] = useState(""); // Track the selected reason

  const toggleReportModal = () => {
    setShowReportModal(!showReportModal); // Toggle modal visibility
  };

  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleShare = () => {
    setShowShareOptions(!showShareOptions);
  };

  return (
    <>
      <section
        style={{ overflowY: "scroll" }}
        className="openPagesFixComponent"
      >
        <div className="itsCloseNav">
          <FontAwesomeIcon
            onClick={closePage}
            className="fs-1"
            icon={faClose}
          />
        </div>

        <div className="container heroContainer">
          <div className="openImageImg">
            <img style={{}} className="w-100 h-auto" src={image} />
          </div>
          <div
            style={{
              padding: "35px 17px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              <button
                onClick={handleLove}
                className="btn btn-secondary bg-transparent  fs-4 rounded-circle "
              >
                <FontAwesomeIcon
                  className={`${isLoving ? "text-light" : "text-danger"}`}
                  icon={isLoving ? faRegularHeart : faSolidHeart}
                />
              </button>
              <button
                onClick={handleFavorite}
                className="btn btn-secondary bg-transparent fs-4 rounded-circle mx-2"
              >
                <FontAwesomeIcon
                  className={`${isFavoriting ? "text-light" : "text-warning"}`}
                  icon={isFavoriting ? faRegularBookmark : faSolidBookmark}
                />
              </button>
            </span>

            <button
              onClick={handleShare}
              className="btn btn-secondary bg-transparent fs-4 rounded-circle"
            >
              <FontAwesomeIcon icon={faShare} />
            </button>
          </div>

          {showShareOptions && (
            <div className="shareOptionsContainer">
              <div className="shareOptionsModal">
                <div className="shareOptionsHeader">
                  <p className="shareOptionsTitle">Choose where to share</p>
                  <button
                    className="closeShareOptionsBtn"
                    onClick={() => setShowShareOptions(false)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>

                <div className="shareOptionsList">
                  <button className="shareOption">
                    <FontAwesomeIcon icon={faFacebook} />
                    Facebook
                  </button>
                  <button className="shareOption">
                    <FontAwesomeIcon icon={faInstagram} />
                    Instagram
                  </button>
                  <button className="shareOption">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    WhatsApp
                  </button>
                  <button className="shareOption">
                    <FontAwesomeIcon icon={faTelegram} />
                    Telegram
                  </button>
                </div>
              </div>
            </div>
          )}

          <div
            className="d-flex justify-content-center gap-3 repdownBtnsPrent"
            style={{ padding: "17px" }}
          >
            <button
              onClick={handleDownload}
              className="downloadAndReportBtns  btn btn-secondary bg-transparent "
            >
              Download
            </button>

            {/* Report Button */}
            <button
              onClick={toggleReportModal}
              className="btn btn-secondary bg-transparent fs-4 rounded-circle"
            >
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </button>

            {/* Report Modal */}
            {showReportModal && (
              <div className="reportModal">
                <div className="modalContent">
                  <h2 className="modalTitle px-1">Report Image</h2>
                  <span
                    className="btn-submit"
                    onClick={toggleReportModal}
                    style={{
                      fontSize: "28px",
                      position: "absolute",
                      top: "35px",
                      right: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>

                  {/* Report Reasons */}
                  {/* <select
                    value={reportReason}
                    onChange={(e) => setReportReason(e.target.value)}
                    className="reportSelect"
                  >
                    <option value="">Select a reason</option>
                    <option value="Inappropriate content">
                      Inappropriate content
                    </option>
                    <option value="Spam or misleading">
                      Spam or misleading
                    </option>
                    <option value="Copyright infringement">
                      Copyright infringement
                    </option>
                    <option value="Other">Other</option>
                  </select> */}

                  {/* Modal Actions - Submit and Close */}
                  {/* <div className="modalActions">
                    <button
                      className="btn-submit"
                      onClick={() => {
                        // Handle report logic here
                        alert(`Reported for: ${reportReason}`);
                        setShowReportModal(false); // Close modal
                      }}
                    >
                      Submit Report
                    </button>
                    <button
                      className="btn-close"
                      onClick={toggleReportModal} // Close without submitting
                    >
                      Close
                    </button>
                  </div> */}

                  <div className="reportReasonsParent">
                    <div>Lorem Ispum dller sign is</div>
                    <div>Lorem Ispum dller sign is</div>
                    <div>Lorem Ispum dller sign is</div>
                    <div>Lorem Ispum dller sign is</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-3">
            <p className="fs-4 fw-bold">What is this image about?</p>
            <p>
              Lorem ispum doller sign about something that we learn about them,
              if this was about another idea.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

let Image = ({ id, image }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  useEffect(() => {
    async function getUsers() {
      try {
        const result = await axios("");
        setUsers(result.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    }
    getUsers();
  }, []);

  const [openImageOpen, setOpenImageOpen] = useState(false);
  const handleOpenImage = () => {
    setOpenImageOpen(true);
  };
  const closeOpenImage = () => {
    setOpenImageOpen(false);
  };

  return (
    <>
      <div onClick={handleOpenImage} className="handleImgDiv">
        {loading ? (
          <div
            className="w-100 mb-3"
            style={{
              height: "190px",
              animation: "smothPlaceholder 1.3s ease-in-out infinite alternate",
            }}
          ></div>
        ) : (
          <img id="babaKarimi" className="h-100 w-100 img-fluid object-fit-cover " src={image} />
        )}

        <FontAwesomeIcon
          className="position-absolute top-0 end-0 mx-2 my-2 bg-black text-white p-2 rounded-circle "
          id="download-icon" 
          icon={faArrowDown}
        />
      </div>
      {openImageOpen && <OpenImage image={image} closePage={closeOpenImage} />}
    </>
  );
};

let IslamicImages = () => {
  const [activeSection, setActiveSection] = useState("All");
  return (
    <>
      <Header />
      <Menus />

      <div className="container heroContainer">
        <section
          id="hero_section"
          className="d-block  "
          style={{
            backgroundImage: "url(./islamic-images-bg.webp)",
            padding: "80px 15px",
          }}
        >
          <div className="overlay"></div>

          <div
            className="isImgInputHeadingParent"
            style={{ position: "relative", zIndex: 2 }}
          >
            <h1
              style={{ fontSize: "35px", fontWeight: "bold" }}
              className="text-start "
            >
              Lorem Ispum Doller Sign is something Diffrent than anything you
              see.
            </h1>

            <input
              type="search"
              placeholder="Search for free photos "
              className="mt-4 w-100 input p-4 "
            />
            <button type="submit" className="input_submit">
              <img src="./Search.png" width="30" />
            </button>
          </div>
        </section>

        <section className="p-3">
          <div
            style={{
              width: "100%",
              marginTop: "20px",
              display: "flex",
              gap: "4px",
              overflowX: "auto",
              scrollbarColor: "transparent transparent",
              scrollbarWidth: "thin",
            }}
          >
            {["All", "Quranic Verses", "Macca", "Madina", "Wallpapers"].map(
              (section) => (
                <button
                  key={section}
                  className={`btn text-nowrap ${
                    activeSection === section ? "bg-light text-dark" : ""
                  }`}
                  onClick={() => setActiveSection(section)}
                >
                  {section}
                </button>
              )
            )}
          </div>

          {activeSection === "All" && (
            <section>
              <p className="fs-2 my-5">Free Stock Photoes</p>
              <div className="isImagesParent">
                <Image image="./placeholder-image.jpg" />
                <Image image="https://i.pinimg.com/474x/df/f9/a7/dff9a7c66c4e998ea6219282527be3f4.jpg" />
                <Image image="https://i.pinimg.com/474x/b0/d6/81/b0d6813136b9732f3dd4381fcaee7ef2.jpg" />
                <Image image="https://i.pinimg.com/474x/d0/14/ea/d014ea8f4d73e19f18d4e263102c91c8.jpg" />
                <Image image="https://i.pinimg.com/236x/e6/96/74/e69674ea1130fba3c3ec530d3c04cece.jpg" />
                <Image image="https://i.pinimg.com/236x/a3/71/5f/a3715f7bd47dabe72e8cdf804ba49e9e.jpg" />
                <Image image="https://i.pinimg.com/236x/86/c2/a0/86c2a0efd4124422aba0d1e0dd6367fb.jpg" />
                <Image image="https://i.pinimg.com/236x/cb/fd/61/cbfd61c8da70d0f2b4c153d9041b2fbd.jpg" />
                <Image image="https://i.pinimg.com/236x/6c/71/de/6c71de65addb615aea9d48e06b27f808.jpg" />
                <Image image="https://i.pinimg.com/236x/0e/28/a2/0e28a2998c4ca8b5e0fec94e3c4808f2.jpg" />
                <Image image="https://i.pinimg.com/236x/5f/f5/54/5ff554db8df4299be1c04c8ed60bc344.jpg" />
                <Image image="https://i.pinimg.com/236x/27/0c/a5/270ca547e147de75fa998ec09f89766f.jpg" />
                <Image image="https://i.pinimg.com/236x/50/7f/50/507f5047feebc805f9d227a60dd88875.jpg" />
                <Image image="https://i.pinimg.com/236x/73/05/f1/7305f1100d169eb1f0cdeeba9aea510c.jpg" />
                <Image image="https://i.pinimg.com/236x/ea/5e/b8/ea5eb857df3bdb7c852c72459fd75c0d.jpg" />
                <Image image="https://i.pinimg.com/236x/f4/e2/63/f4e2639d11f0ede8c2097036a1d4f63f.jpg" />
                <Image image="https://i.pinimg.com/236x/65/23/ac/6523ac069fc233fb4a1dcd3f1b9f58a6.jpg" />
                <Image image="https://i.pinimg.com/474x/d3/2e/c4/d32ec4d11b11ef182cf4f7f4438b0865.jpg" />
                <Image image="https://i.pinimg.com/236x/24/9b/8e/249b8e90ae3020238c0b55d45c0c351a.jpg" />
                <Image image="https://i.pinimg.com/474x/06/ed/3f/06ed3f0aca9cb7d145595f39df0191a0.jpg" />
                <Image image="https://i.pinimg.com/236x/a4/e6/e7/a4e6e7592d948e86fecbde63384891cc.jpg" />
                <Image image="https://i.pinimg.com/236x/24/9b/8e/249b8e90ae3020238c0b55d45c0c351a.jpg" />
                <Image image="https://i.pinimg.com/236x/d7/41/04/d741049f54e9abf274fbbffcd147a252.jpg" />
                <Image image="https://i.pinimg.com/236x/3b/be/94/3bbe94292382382362ff3a3d8e7db69c.jpg" />
                <Image image="https://i.pinimg.com/236x/2c/ec/c9/2cecc91d0c8a27ceb884f694d4143c9b.jpg" />
                <Image image="https://i.pinimg.com/236x/60/78/41/607841cbdc15adffc4d4eb9e3f604138.jpg" />
                <Image image="https://i.pinimg.com/236x/0d/43/b1/0d43b15688cea05509fe097e7728f1b2.jpg" />
                <Image image="https://i.pinimg.com/236x/57/7d/4e/577d4eea903b5621d7ea7f33813dfd3b.jpg" />
                <Image image="https://i.pinimg.com/236x/bd/3f/ef/bd3fef4a21c01c7164837635f52c28d4.jpg" />
                <Image image="https://i.pinimg.com/236x/8b/f3/3f/8bf33f247c40b718e6ddd595666f1272.jpg" />
                <Image image="https://i.pinimg.com/236x/34/44/89/3444891304146361e6f012b85e63e121.jpg" />
                <Image image="https://i.pinimg.com/236x/53/2e/78/532e783eba31f7041bd9263d80229472.jpg" />
              </div>
            </section>
          )}

          {activeSection === "Quranic Verses" && (
            <section>
              <p className="fs-2 my-5">Quranic Verses Photos</p>
              <div className="isImagesParent">
                <Image image="https://i.pinimg.com/474x/86/69/17/86691711c9ed7443a8d6ce4203d99ea6.jpg" />
                <Image image="https://i.pinimg.com/736x/9a/37/13/9a37134d5004cce73c88b0173fc140bc.jpg" />
                <Image image="https://i.pinimg.com/videos/thumbnails/originals/0c/76/33/0c7633b999af636bbe773b97be79f093.0000000.jpg" />
                <Image image="https://i.pinimg.com/474x/15/30/e2/1530e273b55e11d60779ac80db5524dd.jpg" />
                <Image image="https://i.pinimg.com/474x/70/97/f3/7097f3957795ff51c78fa4617b89b154.jpg" />
                <Image image="https://i.pinimg.com/236x/02/db/ac/02dbacb905e5dcc9f5c7bc6c2e3bbd66.jpg" />
                <Image image="https://i.pinimg.com/236x/a1/e6/61/a1e661a3d9ccaabb9e920d2aa0aa2bb9.jpg" />
                <Image image="https://i.pinimg.com/474x/f7/70/09/f77009a82f21826b3ccd55d29c24f364.jpg" />
                <Image image="https://i.pinimg.com/474x/86/85/88/868588fdf270e1525851238963f7dcd3.jpg" />
                <Image image="https://i.pinimg.com/236x/f2/b8/ff/f2b8ff55f6d209ab8c3d7a45257b10c9.jpg" />
                <Image image="https://i.pinimg.com/474x/7b/fe/82/7bfe8240d874fe969fa0d910d7a6736f.jpg" />
                <Image image="https://i.pinimg.com/474x/fd/bb/15/fdbb150586748c5e66d81082ec35a6fc.jpg" />
                <Image image="https://i.pinimg.com/236x/36/a2/88/36a288378d82771e2c63febf01e1674e.jpg" />
                <Image image="https://i.pinimg.com/474x/fd/bb/15/fdbb150586748c5e66d81082ec35a6fc.jpg" />
                <Image image="https://i.pinimg.com/236x/e8/ad/d6/e8add63a5f45c5b3d3b5ab1f60a69720.jpg" />
                <Image image="https://i.pinimg.com/474x/13/26/b1/1326b12e48f7bf11f36858fcb7f3a199.jpg" />
                <Image image="https://i.pinimg.com/474x/85/7c/64/857c642652710f94fbc223723dcca63d.jpg" />
              </div>
            </section>
          )}

          {activeSection === "Macca" && (
            <section>
              <p className="fs-2 my-5">Macca</p>
              <div className="isImagesParent">
                <Image image="https://i.pinimg.com/236x/b6/b3/bd/b6b3bde9753706dd73f629ff4a6c0386.jpg" />
                <Image image="https://i.pinimg.com/236x/87/6d/d7/876dd76988f722f9ca587a528a60bf3a.jpg" />
                <Image image="https://i.pinimg.com/236x/92/8c/27/928c2744039751023ad50117112903a9.jpg" />
                <Image image="https://i.pinimg.com/236x/99/5f/15/995f15e93a9d52616baff124e7068d0c.jpg" />
                <Image image="https://i.pinimg.com/236x/34/fe/b7/34feb71e7786da0b593158165caab44a.jpg" />
                <Image image="https://i.pinimg.com/474x/5a/ec/ef/5aecef2e4a87f5bd4a140b501bdbe123.jpg" />
                <Image image="https://i.pinimg.com/236x/c0/90/b7/c090b7afc9b20fa720264ccd182e2603.jpg" />
                <Image image="https://i.pinimg.com/236x/7d/74/74/7d7474dd14fe923c74502dd979d05180.jpg" />
                <Image image="https://i.pinimg.com/236x/99/5f/15/995f15e93a9d52616baff124e7068d0c.jpg" />
                <Image image="https://i.pinimg.com/236x/92/8c/27/928c2744039751023ad50117112903a9.jpg" />
                <Image image="https://i.pinimg.com/236x/71/49/8f/71498f759ac542cd2a510d121538efaa.jpg" />
                <Image image="https://i.pinimg.com/236x/37/2e/31/372e31ac7f3b9fe85f5e8a80e95b4b0d.jpg" />
                <Image image="https://i.pinimg.com/236x/59/35/90/593590f6d6f886372a0aa512e07037cf.jpg" />
                <Image image="https://i.pinimg.com/236x/e0/60/b5/e060b5b5608bc6ef52dde77607b1b461.jpg" />
                <Image image="https://i.pinimg.com/474x/cf/f5/8d/cff58d74a5b8ed824b5f3d98d20915b9.jpg" />
                <Image image="https://i.pinimg.com/236x/00/e5/f4/00e5f4a9782364e49091b4d82345ba52.jpg" />
                <Image image="https://i.pinimg.com/236x/a8/83/1e/a8831e126a9dc8e3bf31e07bb21d945d.jpg" />
                <Image image="https://i.pinimg.com/236x/00/52/01/005201ecfb7ce9f994b59a408f31dfd4.jpg" />
                <Image image="https://i.pinimg.com/236x/21/fa/99/21fa9938d67234cb419ba9fe874dd633.jpg" />
                <Image image="https://i.pinimg.com/236x/d8/ec/32/d8ec325e032f5a7bcdb59deff953e3d9.jpg" />
                <Image image="https://i.pinimg.com/236x/30/41/a4/3041a417ef4bcce8f8069e744f8537a8.jpg" />
                <Image image="https://i.pinimg.com/236x/1d/3e/e4/1d3ee4a9b9d1a469446974380cbd91fb.jpg" />
              </div>
            </section>
          )}

          {activeSection === "Madina" && (
            <section>
              <p className="fs-2 my-5">Madina</p>
              <div className="isImagesParent">
                <Image image="https://i.pinimg.com/236x/3e/a6/56/3ea656c1c4bde1e286bb4901501855ec.jpg" />
                <Image image="https://i.pinimg.com/474x/5c/05/f5/5c05f5a5134bbbd763d7d60332ee8077.jpg" />
                <Image image="https://i.pinimg.com/474x/06/c4/13/06c413ca1d56f7e01a882860f056dba5.jpg" />
                <Image image="https://i.pinimg.com/474x/d1/61/ec/d161ec66969d339259df6202ff58032a.jpg" />
                <Image image="https://i.pinimg.com/236x/72/45/32/72453276bbb3d3073871a8ade0ed1143.jpg" />
                <Image image="https://i.pinimg.com/474x/68/ca/ae/68caae78977d740787be58ef163b40d1.jpg" />
                <Image image="https://i.pinimg.com/236x/bb/99/11/bb9911fcb7f12a7a05c2dc060415b8d3.jpg" />
                <Image image="https://i.pinimg.com/474x/f5/25/dc/f525dc79cdbb81e36775496cc3d3b3c6.jpg" />
                <Image image="https://i.pinimg.com/474x/7f/f4/64/7ff4643bd1f408b28342a481b9cda00a.jpg" />
                <Image image="https://i.pinimg.com/236x/8b/5b/d1/8b5bd1a5d7db406004c6e896e6466af4.jpg" />
                <Image image="https://i.pinimg.com/474x/fd/c3/87/fdc387788487c8d65b548a10ae3e754a.jpg" />
                <Image image="https://i.pinimg.com/474x/0d/92/70/0d927091e6205e65ed6b7f4c3ae1bf8a.jpg" />
                <Image image="https://i.pinimg.com/474x/45/a1/b9/45a1b979ca02979cac352718101807ee.jpg" />
                <Image image="https://i.pinimg.com/236x/98/c6/d2/98c6d2d6f6adfc64918c21b99ec043fc.jpg" />
                <Image image="https://i.pinimg.com/236x/8f/34/f7/8f34f7086cae4bd95d9a3dd2f506e0b2.jpg" />
                <Image image="https://i.pinimg.com/236x/56/1c/11/561c11e7118612d967ce9f79e67e1003.jpg" />
                <Image image="https://i.pinimg.com/236x/7e/53/8e/7e538eafbb5f5ae19978b56e9a576dd5.jpg" />
                <Image image="https://i.pinimg.com/236x/64/67/eb/6467eb39ae3a38bfdce37ff776c2d6aa.jpg" />
                <Image image="https://i.pinimg.com/474x/8d/09/76/8d09763eac2f4174082c9ffebe90410f.jpg" />
                <Image image="https://i.pinimg.com/736x/5d/3a/70/5d3a7036899560be97ca9b280595b98e.jpg" />
              </div>
            </section>
          )}

          {activeSection === "Wallpapers" && (
            <section>
              <p className="fs-2 my-5">Wallpapers</p>
              <div className="isImagesParent">
                <Image image="https://i.pinimg.com/474x/d5/aa/c6/d5aac68a97fbc5e3ff6ca5b0aef47426.jpg" />
                <Image image="https://i.pinimg.com/236x/66/90/12/669012a3da481a0e5b59dec7bba6f5b0.jpg" />
                <Image image="https://i.pinimg.com/236x/9b/6f/08/9b6f08609785ccb0849161e755e68fcd.jpg" />
                <Image image="https://i.pinimg.com/474x/b1/66/2a/b1662a1705417a296a3bc10d94c0794a.jpg" />
                <Image image="https://i.pinimg.com/236x/a8/f9/83/a8f9834d1cd7d1ba9d2063479973b929.jpg" />
                <Image image="https://i.pinimg.com/474x/93/64/a4/9364a4c1f2ca29a5323a06fb50576594.jpg" />
                <Image image="https://i.pinimg.com/474x/1c/dd/11/1cdd11cb77191587ad2ff4959f38a5b8.jpg" />
                <Image image="https://i.pinimg.com/236x/d0/2d/9e/d02d9ed2030660913c591f5aaf2c1bf1.jpg" />
                <Image image="https://i.pinimg.com/474x/39/6b/15/396b1519252dc61a9744accc1fa712bb.jpg" />
                <Image image="https://i.pinimg.com/236x/d4/ba/53/d4ba537853cc3ad1932bfb86c2ba407f.jpg" />
                <Image image="https://i.pinimg.com/474x/95/b4/64/95b464ef5691e7bc72e10240874eca87.jpg" />
              </div>
            </section>
          )}
        </section>
      </div>
    </>
  );
};

export default IslamicImages;
