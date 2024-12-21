// App.jsx
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import Home from "./Home";
import Test0 from "./blogs/Test0"

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/blogs/test" component={Test0} />
    </Router>
  );
}

render(() => <App />, document.getElementById("root"));

export default App;
