import React from "react";

const Article = ({ title, author, text }) => {
  const styles = {
    marginBottom: 40 + "px",
  };
  return (
    <article style={styles}>
      <h1 style={{ marginBottom: 10, textTransform: "uppercase" }}>{title}</h1>{" "}
      <span style={{ display: "block", marginBottom: 10, fontSize: 12 }}>
        {author}
      </span>{" "}
      <p>{text}</p>
    </article>
  );
};

export default Article;
