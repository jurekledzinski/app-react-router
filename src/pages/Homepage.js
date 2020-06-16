import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quo nam at ipsum consequatur deleniti. Nisi ipsam neque nobis fuga, praesentium, iure odit, tenetur modi voluptatum quos atque inventore impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis laudantium, nihil ipsa nesciunt dolorem corporis. Dolorem dolore corrupti vel nostrum!",
  },
  {
    id: 2,
    title: "Kiedy wchodzi życie do ciała",
    author: "Kasia Kowalska",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quo nam at ipsum consequatur deleniti. Nisi ipsam neque nobis fuga, praesentium, iure odit, tenetur modi voluptatum quos atque inventore impedit!",
  },
  {
    id: 3,
    title: "Fenomen Himalayów",
    author: "Alicja Bąk",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quo nam at ipsum consequatur deleniti. Nisi ipsam neque nobis fuga, praesentium, iure odit, tenetur modi voluptatum quos atque inventore impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis laudantium, nihil ipsa nesciunt dolorem corporis. Dolorem dolore corrupti vel nostrum, consequatur mollitia suscipit architecto blanditiis voluptatum fugiat inventore aut!",
  },
];

const Homepage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default Homepage;
