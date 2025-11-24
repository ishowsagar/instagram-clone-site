import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";
import { useEffect, useState, createContext, useContext } from "react";
const postDataContext = createContext();

export default function MainLayout() {
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
        setPostData(data?.slice(0, 45));
      } catch (err) {
        console.error("caught error while fetching data -", err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <postDataContext.Provider value={{ postData, setPostData }}>
        <section className="Site_wrapper">
          <Header />

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
