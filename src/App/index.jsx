import { Route, Routes } from "react-router-dom";

import * as pages from "../Utils/pages";
import { paths } from "../Utils/path";

const index = () => {
  return (
    <>
      <Routes>
        <Route path={paths.Home} element={<pages.Home />} />
        <Route path={paths.Login} element={<pages.Login />} />
        <Route path={paths.Register} element={<pages.Register />} />
        <Route path={paths.BlogDetail("id")} element={<pages.BlogDetail />} />

        {/* Author */}
        <Route path={paths.CreateBlog} element={<pages.CreateBlog />} />

        {/* Admin */}
      </Routes>
    </>
  );
};

export default index;
