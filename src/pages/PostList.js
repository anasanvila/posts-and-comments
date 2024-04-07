import Layout from "../layouts/Layout";
import { useLoaderData } from "react-router-dom";
import { useEffect, createContext, useContext, useState } from "react";
import { BASE_URL } from "../utils";
import Form from "../moleculs/Form";
import { withUsers } from "../utils";

const PostList = ({ text }) => {
  const data1 = useLoaderData();
  const [url, setUrl] = useState(`${BASE_URL}/posts`);
  //const [searchId, setSearchId] = useState("");
  const [listData, setListData] = useState(data1);

  useEffect(() => text("PostList"), []);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("dataa", data);
        setListData(data);
      });
  }, [url]);

  const FormWithUsers = withUsers(Form);

  const handleSearchSubmit = (searchId) => {
    console.log("search id ====", searchId);
    searchId === ""
      ? setUrl(`${BASE_URL}/posts`)
      : setUrl(`${BASE_URL}/posts?userId=${searchId}`);
  };

  return (
    <>
      <div className="formContainer">
        <FormWithUsers sendDataToParent={(id) => handleSearchSubmit(id)} />
      </div>
      <Layout list={listData} text={text} />
    </>
  );
};

export default PostList;

export async function postListLoader({ request, params }) {
  const url = `${BASE_URL}/posts`;
  const postListResponse = await fetch(url);
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
