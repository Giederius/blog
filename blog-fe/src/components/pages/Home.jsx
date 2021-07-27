import React from "react";
import Header from "../Header";
import MostPopularPosts from "../Mostpopularposts";
import LatestBlogPosts from "../Latestblogposts";

export default function Home() {
  return (
    <div>
      <Header />
      <MostPopularPosts />
      <LatestBlogPosts />
    </div>
  );
}
