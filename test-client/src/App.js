import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/global/global.scss";

import { Layout } from "./components/global";
import { Home } from "./components/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
