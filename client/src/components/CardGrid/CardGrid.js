import React from "react";
import { useSelector } from "react-redux";
import "./cardGrid.scss";
import Card from "../../components/Card/Card";

const CardGrid = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className="card-grid">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardGrid;
