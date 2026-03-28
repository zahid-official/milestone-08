import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Dashboard from "./pages/Dashboard";
import Cards from "./components/Outlet/Gadgets/Cards/Cards";
import CardDetails from "./components/Outlet/Gadgets/Cards/CardDetails";
import ErrorPage from "./ErrorPage";
import Articles from "./pages/Articles";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          children: [
            {
              path: '/',
              element: <Cards></Cards>,
              loader: ()=> fetch('/gadgets.json'),
            },
            {
              path: '/gadgets/:category',
              element: <Cards></Cards>,
              loader: ()=> fetch('/gadgets.json'),
            },
          ]
        },
        {
          path: '/details/:id',
          element: <CardDetails></CardDetails>,
          loader: ()=> fetch('/gadgets.json'),
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>,
          loader: ()=> fetch('/gadgets.json'),
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: '/article',
          element: <Articles></Articles>
        },
      ]
    },
  ]);

  export default routes
