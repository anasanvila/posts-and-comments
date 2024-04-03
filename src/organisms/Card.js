import { useState, useEffect } from "react";
import Comment from "../moleculs/Comment";

const Card = ({ post }) => {
  let [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => {
        console.log("comments", data);
        return setComments(data);
      });
  }, []);

  return (
    <div className="card p-3 mt-3 fs-6 text-start h-100" key={post.id}>
      <div className="card-header">
        <h6>
          <span className="badge border border-success text-success ">
            User: {post.userId}
          </span>
        </h6>
        <h5 className="card-title cap">{post.title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text cap">{post.body}</p>
        <a href="#" className="btn btn-success">
          See more...
        </a>
      </div>
      <div className="card-footer">
        {comments?.map((comment) => (
          <Comment>
            <div style={{ border: "1px solid green" }}>
              <p>{comment.name}</p>
              <p>{comment.email}</p>
              <p>{comment.body}</p>
            </div>
          </Comment>
        ))}
      </div>
    </div>
  );
};

export default Card;

// const LIMIT = 3;

// const CardContext = createContext();

// const Card = ({ children }) => {
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   const expand = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const collapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const value = { isCollapsed, expand, collapse };
//   return (
//     <CardContext.Provider value={value}>
//       <div className="card">{children}</div>
//     </CardContext.Provider>
//   );
// };

// const CardContent = ({ children }) => {s
//   const { isCollapsed } = useContext(CardContext);
//   return children.map((child, index) => {
//     if (isCollapsed) {
//       while (LIMIT > index) {
//         return <div key={index}>{child}</div>;
//       }
//     } else {
//       return <div key={index}>{child}</div>;
//     }
//   });
// };

// const Expand = ({ children }) => {
//   const { expand, isCollapsed } = useContext(CardContext);
//   return isCollapsed && cloneElement(children, { onClick: expand });
// };

// const Collapse = ({ children }) => {
//   const { collapse, isCollapsed } = useContext(CardContext);
//   return !isCollapsed && cloneElement(children, { onClick: collapse });
// };

// Card.CardContent = CardContent;
// Card.Expand = Expand;
// Card.Collapse = Collapse;
