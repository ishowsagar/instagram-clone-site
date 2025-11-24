import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <>
      <Header />
      <h1>Main layout shared ui structure goes here</h1>
      <Outlet />
    </>
  );
}
