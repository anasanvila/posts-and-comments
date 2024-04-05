import { useState, useEffect, useLayoutEffect } from "react";
import Comment from "../moleculs/Comment";
import { NavLink } from "react-router-dom";

const Card = ({ post, detail, text }) => {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((response) => response.json())
      .then((data) => {
        return setComments(data);
      });
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => {
        let name = "";
        name = data.forEach((user) => {
          if (user.id == post.userId) setUser(user);
        });
      });
  }, []);
  useLayoutEffect(() => text("Card"));

  return (
    <div className="card p-3 mt-3 fs-6 text-start h-100" key={post.id}>
      <div className="card-header">
        <h6>
          <span className="badge border border-success text-success ">
            User: {user?.name}
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
            <div style={{ borderBottom: "1px solid green" }}>
              <h5 className="cap">
                <small>
                  <b>{comment.name}</b>
                </small>
              </h5>
              <h6 className="text-success">
                <small>
                  <i>{comment.email}</i>
                </small>
              </h6>
              <p>
                <small>{comment.body}</small>
              </p>
            </div>
          </Comment>
        ))}
      </div>
    </div>
  );
};

export default Card;
