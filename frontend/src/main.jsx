import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./context";
import { BrowserRouter } from "react-router-dom";
import Load from "./components/load/Load.jsx";
const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<Load />}>
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
