import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Variables from "../page/variables/Variables";
import Data from "../page/data/Data";
import Analysis from "../page/analysis/Analysis";
import Edit from "../page/edit/Edit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "variables",
        element: <Variables />,
      },
      {
        path: "data",
        element: <Data />,
      },
      {
        path: "analysis",
        element: <Analysis />,
      },
      {
        path: "edit",
        element: <Edit />,
      },
    ],
    errorElement: "404 - Not Found",
  },
]);
