import "./home.scss";
import Banner from "./Banner/banner";
import Search from "./Search/Search";
import BlogCards from "./BlogCards/BlogCard";
import Carousel from "./Carousel/Carousel";
import AboutUs from "./AboutUs/aboutus";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <AboutUs />
          <Search />
          <BlogCards />
          <Carousel />
        </div>
      </div>
    </div>
  );
};
export default Home;
