import { useState, useEffect, useLayoutEffect } from "react";
import Comment from "../moleculs/Comment";
import { NavLink } from "react-router-dom";
import user from "../img/user.png";

const Card = ({ post, detail, text, nameOfUser }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((response) => response.json())
      .then((data) => {
        return setComments(data);
      });
  }, []);

  useLayoutEffect(() => text("Card"));

  return (
    <div className="card p-3 mt-3 fs-6 text-start h-100" key={post.id}>
      <div className="card-header">
        <h6>
          <span className="badge border border-success text-success ">
            User: {nameOfUser}
          </span>
        </h6>
        <h5 className="card-title cap">
          <b>{post.title}</b>
        </h5>
      </div>
      <div className="card-body">
        <p className="card-text cap">{post.body}</p>
        {!detail && <NavLink to={`${post.id}`}>See more...</NavLink>}
      </div>
      <div className="card-footer">
        {comments?.map((comment, index) => (
          <Comment text={text} key={`${index}-${comment.id}`}>
            <div
              style={{ borderBottom: "1px solid green", marginBottom: "7px" }}
            >
              <p className="text-success fst-italic extra-small">
                <img src={user} width="40" /> {comment.email} :{" "}
                <span className="fw-bold fw-normal text-uppercase ">
                  {comment.name}
                </span>
              </p>
              <p className="extra-small cap">{comment.body}</p>
            </div>
          </Comment>
        ))}
      </div>
    </div>
  );
};

export default Card;
