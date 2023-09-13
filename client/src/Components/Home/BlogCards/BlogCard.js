import React from "react";
import { animated, useSpring } from "react-spring"; // Assuming you have react-spring installed
import service1 from "../../../assets/service1.png";
import service2 from "../../../assets/service2.png";
import service3 from "../../../assets/service3.png";
import service4 from "../../../assets/service4.png";
import BlogItems from "../BlogItems/BlogItem";

const BlogCards = () => {
  const h1Props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 3000 }, 
    delay: 900, 
  });

  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <animated.h1 className="text-green-500" style={h1Props}>
        BLOGS AND ARTICLES
      </animated.h1>

      <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <BlogItems bg={service1} text="Blog1" />
        <BlogItems bg={service2} text="Blog2" />
        <BlogItems bg={service3} text="Blog3" />
        <BlogItems bg={service4} text="Blog4" />
        <BlogItems bg={service2} text="Blog5" />
        <BlogItems bg={service1} text="Blog6" />
      </div>
    </div>
  );
};

export default BlogCards;
