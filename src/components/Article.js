import React from "react";

const Article = ({ title, date, preview, minutes }) => {
  return (
    <div>
      <article>
        <h3>{title}</h3>
        <small>
          {date ? date : "January 1, 1970"}{" "}
          {minutes < 30
            ? `${"☕️".repeat(minutes / 5)} ${minutes} min read`
            : `${"🍱".repeat(minutes / 10)} ${minutes} min read`}
        </small>
        <p>{preview} </p>
      </article>
    </div>
  );
};

export default Article;
