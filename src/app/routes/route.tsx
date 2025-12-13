import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/template/Layout/Layout";
import Home from "../../components/pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        {
            index:true,
            element: <Home/>
        },
        {
            path: '/film/:id',
            element: <>FilmBy ID</>
        }
    ],
  },
]);
