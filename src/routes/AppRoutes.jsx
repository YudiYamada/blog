import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import NewPost from "../pages/NewPost"
import Post from "../pages/Post"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/posts/:id" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;