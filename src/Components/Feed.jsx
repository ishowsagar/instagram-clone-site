import { useEffect, useState, createContext, useContext } from "react";
import FeedPost from "./FeedPost";

const postDataContext = createContext();

export default function Feed() {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("error fetching data");
        }
        const data = await response.json();
        setPostData(data?.slice(0, 5));
      } catch (err) {
        console.error("caught error while fetching data -", err);
      }
    }
    fetchData();
  }, []);

  // console.log(postData);

  // todo - rendering each Post
  return (
    <>
      <postDataContext.Provider value={postData}>
        <FeedPost />
      </postDataContext.Provider>
    </>
  );
}

export const usePostContext = () => useContext(postDataContext);

// Posts (root)
// Each post (branch)
// userId
// id
// title
// body

// useContext directly and access props
