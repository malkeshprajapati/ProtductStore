import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import Auth from "./components/auth";
import List from "./pages/list";
import DetailView from "./pages/detailPage/detailView";
import Layout from "./layout/layout";
import MyProfile from "./pages/profile/myProfile";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <Auth />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "/", element: <List /> },
          { path: "/list/:id", element: <DetailView /> },
          { path: "/profile", element: <MyProfile /> },
        ],
      },
    ],
  },
]);
export default router;
