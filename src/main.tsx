import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { setupStore } from "./store/store.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuoteCriteria from "./components/views/QuoteCriteria.tsx";
import Travelers from "./components/views/Travelers.tsx";
import 'tailwindcss/tailwind.css';

const router = createBrowserRouter([
  { path: "/", element: <QuoteCriteria /> },
  { path: "/quote", element: <h1>Quotes from backend</h1> },
  { path: "/travelers", element: <Travelers /> }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
