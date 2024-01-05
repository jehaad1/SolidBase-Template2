/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

const Home = lazy(() => import("./pages/Home"));

import "./tailwind.css";

render(
  () => (
    <Router>
      <Routes>
        <Route
          path="/"
          component={Home}
        />
      </Routes>
    </Router>
  ),
  document.body
);
