import "./Overlay.css";

function Overlay({ closeSidebar, closeIt }) {
  const handleClicks = () => {
    try {
      closeIt();
    } catch (error) {
      console.error("error is in closeIt", error);
      
    }
    try {
      closeSidebar()
    } catch (error) {
      console.error("error is in close side bar", error);
      
    }
    
    closeSidebar();
  };
  return (
    <>
      <div id="overlay" onClick={handleClicks}></div>
    </>
  );
}

export default Overlay;
