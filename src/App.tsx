import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import List from "./pages/list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/list",
    element: <List/>,
  },
]);


function App() {
  return (
    <div id="root">
        
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    </div>
  )
}

export default App
