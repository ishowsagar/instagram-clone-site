import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";
import { useEffect, useState, createContext, useContext } from "react";
const postDataContext = createContext();

export default function MainLayout() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setPostData(data?.slice(0, 40));
      } catch (err) {
        console.error("caught error while fetching data -", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        style={{ textAlign: "center", marginTop: "4rem", fontSize: "1.5rem" }}
      >
        Loading...
      </div>
    );
  }

  const storiesElements = postData.map((post) => {
    const displayUsername = post.username
      ? post.username
      : `user${post.userId}`;
    return (
      <div className="story" key={post.id}>
        <img
          src={`https://i.pravatar.cc/60?u=${post.id} `}
          className="story_avatar"
        />
        <span className="story_username">{displayUsername}</span>
      </div>
    );
  });
  return (
    <>
      <postDataContext.Provider value={{ postData, setPostData }}>
        <section className="Site_wrapper">
          <Header />
          <div className="Site_stories_wrapper">{storiesElements}</div>
          <div className="Site_content">
            <div className="Site_sidebar">
              <Sidebar />
            </div>
            <main>
              <Outlet />
            </main>
          </div>

          <Footer />
        </section>
      </postDataContext.Provider>
    </>
  );
}
export const usePostContext = () => useContext(postDataContext);
