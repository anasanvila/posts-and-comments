import Layout from "../layouts/Layout";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const posts = useLoaderData();
  //console.log("posts=", posts);
  return <Layout list={posts} />;
};

export default PostList;

export async function postListLoader({ request, params }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response) {
    throw new Response(JSON.stringify({ message: "Could not fetch" }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData;
  }
}
