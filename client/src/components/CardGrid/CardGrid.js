import React from "react";
import { useSelector } from "react-redux";
import "./cardGrid.scss";
import Card from "../../components/Card/Card";

const CardGrid = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="card-grid">
      {!posts.length ? (
        <div>Loading...</div>
      ) : (
        posts.map((post) => (
          <Card key={post._id} post={post} setCurrentId={setCurrentId} />
        ))
      )}
    </div>
  );
};

export default CardGrid;
