import Header from "./Components/Header/Header";
import Menus from "./Components/Menus/Menus";
import Hero from "./Components/Hero/Hero";
import Categories from "./Components/Categories/Categories";

function Index() {
  return (
    <>
      <Header />
      <Menus />

      <div className="container heroContainer">
        <Hero />
        <Categories />
      </div>

      <br />
      <br />
    </>
  );
}

export default Index;
