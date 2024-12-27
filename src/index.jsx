/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import { Router, Route } from "@solidjs/router";

import Home from "./Home";
import Test0 from "./blogs/Test0";
// render(() => <Router />, document.getElementById("root"));

function NotFound() {
  return <h1>404 Not Found</h1>;
}
render(
  () => (
    <Router>
      <Route path="https://xnors.us.kg/zx/blogs/test" component={Test0} />
      <Route path="https://xnors.us.kg/zx/" component={Home} />
      <Route path="*404" component={NotFound} />
    </Router>
  ),
  document.getElementById("root")
);
