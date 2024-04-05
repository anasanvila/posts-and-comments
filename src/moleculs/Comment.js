import { useEffect } from "react";

const Comment = ({ children, text }) => {
  useEffect(() => text("Comments"));
  return <div className="comment-box">{children}</div>;
};

export default Comment;
