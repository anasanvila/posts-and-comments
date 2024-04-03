import Layout from "../layouts/Layout";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const data = useLoaderData();
  const [postListResData, commentsResData] = data;
  //console.log("commentsResData", commentsResData);

  return <Layout list={postListResData} />;
};

export default PostList;

export async function postListLoader({ request, params }) {
  const postListResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  let postListResData = "";
  if (!postListResponse) {
    throw new Response(JSON.stringify({ message: "Could not fetch" }), {
      status: 500,
    });
  } else {
    postListResData = await postListResponse.json();
  }

  let commentsResData = [];

  return [postListResData, commentsResData];
}
