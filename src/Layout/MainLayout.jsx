import Header from "../Components/Header";
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <>
      <section className="Site_wrapper">
        <Header />
        <Outlet />
        <Footer/>
      </section>
    </>
  );
}
