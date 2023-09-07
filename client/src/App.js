import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/global/global.scss";

import { Layout } from "./components/global";
import { Docs, Home } from "./components/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="docs">
            <Route index element={<Docs />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
