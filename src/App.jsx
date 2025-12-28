import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"experience",
        element:<Experience/>,
      },
      {
        path:"projects",
        element:<Projects/>,
      },
      {
        path:"skills",
        element:<Skills/>,
      },
      {
        path:"education",
        element:<Education/>,
      }
     
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
