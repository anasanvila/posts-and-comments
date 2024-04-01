const Card = ({ post }) => (
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
    </div>
    <div className="card-footer">
      <a href="#" className="btn btn-success">
        See more...
      </a>
    </div>
  </div>
);

export default Card;
