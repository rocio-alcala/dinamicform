import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/organisms/QuoteForm.tsx";
import { Provider } from "react-redux";
import { setupStore } from "./store/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </React.StrictMode>
);
