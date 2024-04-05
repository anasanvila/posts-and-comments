import Card from "../organisms/Card";
import { useParams, useLoaderData } from "react-router-dom";
import { useEffect } from "react";

const CardItem = ({ item, text }) => {
  useEffect(() => text("CardItem"));
  console.log("item ", item);
  return <div>{item.id}</div>;
};

const PostDetail = ({ text }) => {
  const data = useLoaderData();
  return (
    <div>
      {/* <Card>
          <Card.CardContent>
            {post.map((item, index) => {
              return <CardItem key={index} item={item} />;
            })}
          </Card.CardContent>

          <Card.Expand>
            <div>show more</div>
          </Card.Expand>

          <Card.Collapse>
            <div>show less</div>
          </Card.Collapse>
        </Card> */}
      <Card post={data} detail={true} text={text} />
    </div>
  );
};
export default PostDetail;

export async function postLoader({ request, params }) {
  console.log("params=", params);
  const id = params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response) {
    throw new Response(JSON.stringify({ message: "Could not fetch" }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData;
  }
}
