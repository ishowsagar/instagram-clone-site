import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <>
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
    </>
  );
}
