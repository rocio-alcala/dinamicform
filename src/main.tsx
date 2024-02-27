import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { setupStore } from "./store/store.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuoteCriteria from "./components/views/QuoteCriteria.tsx";
import Travelers from "./components/views/Travelers.tsx";
import 'tailwindcss/tailwind.css';
import Summary from "./components/views/Summary.tsx";
import Quotes from "./components/views/Quotes.tsx";

const router = createBrowserRouter([
  { path: "/", element: <QuoteCriteria /> },
  { path: "/quotes", element: <Quotes/> },
  { path: "/travelers", element: <Travelers /> },
  { path: "/summary", element: <Summary /> }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
