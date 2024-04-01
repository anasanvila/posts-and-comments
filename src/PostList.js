import Layout from "./Layout";
import { useState, useEffect } from "react";

const PostList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("https://jsonplaceholder.typicode.com/posts")
      ).json();
      setData(data);
    };

    dataFetch();
  }, []);
  return data && <Layout postList={data} />;
};

export default PostList;
