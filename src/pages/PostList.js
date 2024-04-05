import Layout from "../layouts/Layout";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

const PostList = ({ text }) => {
  useEffect(() => text("PostList"));
  const data = useLoaderData();
  return <Layout list={data} text={text} />;
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

  return postListResData;
}
