import Overlay from "../Overlay/Overlay";

function ChooseCountry() {
  return (
    <>
      <Overlay />
      <div
        style={{
          width: "93%",
          height: "380px",
          position: "fixed",
          top: "25%",
          borderRadius: "15px",
          boxShadow: "0 3px 40px 5px rgba(228, 228, 228, 0.1)",
          padding: "45px 35px",
          backgroundColor: "black",
          margin: "15px",
          zIndex: 9999,
        }}
      >
        <h1 className="text-center text-primary">Choose Your Country</h1>
        <p className="text-center">
          For a better experience, choose your country.
        </p>

        <div style={{ fontSize: "23px", paddingTop: "10px" }}>
          <p>🚩 Afghanistan</p>
          <p>🚩Pakistan</p>
          <p>🚩Iran</p>
          <p>🚩India</p>
        </div>
      </div>
    </>
  );
}

export default ChooseCountry;
