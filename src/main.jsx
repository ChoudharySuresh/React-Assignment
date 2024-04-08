import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import Home from "./Pages/HomePage.jsx";
import AnalyticsPage from "./Pages/AnalyticsPage.jsx";
import ActivityPage from "./Pages/ActivityPage.jsx";
import TransformationPage from "./Pages/TransformationPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "/activity",
        element: <ActivityPage />,
      },
      {
        path: "/transformation",
        element: <TransformationPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
