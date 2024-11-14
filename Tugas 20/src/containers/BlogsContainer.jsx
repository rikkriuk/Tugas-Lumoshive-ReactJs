import React from "react";
import BlogTopComponent from "../components/BlogTop/BlogTopComponent";
import BlogBottomComponent from "../components/BlogBottom/BlogBottomComponent";
import TitlePageComponent from "../components/TitlePage/TitlePageComponent";
import AboutComponent from "../components/About/AboutComponent";
import MetaTemplate from "../components/Meta/MetaComponent";

const BlogsContainer = () => {
  return (
    <div>
      <MetaTemplate
        title="Blogs"
        description="Read the latest articles and updates on our blog."
        keywords="blogs, articles, news, updates"
      />
      <AboutComponent title="Blogs" subtitle="Home / Blogs" />
      <TitlePageComponent title={"Our Blog"} description={"Latest Post"} />
      <BlogTopComponent />
      <BlogBottomComponent />
      <BlogBottomComponent />
      <BlogBottomComponent />
    </div>
  );
};

export default BlogsContainer;
