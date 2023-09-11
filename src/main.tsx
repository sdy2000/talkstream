import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.tsx";
import { store } from "./context/store.ts";

import "@/assets/styles/global.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
