import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllApps from "../components/AllApps/AllApps";
import Installations from "../components/Installations/Installations";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("/HomePageData.json"),
        Component: Home,
      },
      {
        path: "/Apps",
        loader: () => fetch("/AllAppsData.json"),
        Component: AllApps,
      },
      {
        path: "/Installation",
        Component: Installations,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
