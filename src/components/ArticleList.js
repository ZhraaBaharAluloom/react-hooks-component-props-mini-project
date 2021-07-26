import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  const articleList = posts.map((post) => (
    <Article
      title={post.title}
      date={post.date}
      preview={post.preview}
      minutes={post.minutes}
      key={post.id}
    />
  ));
  return (
    <div>
      <main>{articleList}</main>
    </div>
  );
};

export default ArticleList;
