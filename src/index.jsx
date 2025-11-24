import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./Components/Feed";
import MainLayout from "./Layout/MainLayout";
import CreatePost from "./Components/CreatePost";
createRoot(document.getElementById("root")).render(
  // ! Main layout - shared header and footer, everything else will be rendered as,
  //!  whereever user navigates to that route
  <BrowserRouter>
    <Routes>
      {/*todo - set up Route for each component to be rendered   */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Feed />} />
        <Route path="create" element={<CreatePost />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
