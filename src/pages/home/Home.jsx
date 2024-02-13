import Navbar from "../../compotents/navbar/Navbar";
import Header from "../../compotents/header/header";

import "./home.css";
import Featured from "../../compotents/featured/Featured";
import PropertyList from "../../compotents/propertyList/propertyList";
import FeaturedProperties from "../../compotents/featuredProperties/FeaturedProperties";
import MailList from "../../compotents/MailList/MailList";
import Footer from "../../compotents/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
