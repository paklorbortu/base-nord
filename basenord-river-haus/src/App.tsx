/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Workspace from "./pages/Workspace";
import Cafe from "./pages/Cafe";
import Events from "./pages/Events";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="workspace" element={<Workspace />} />
        <Route path="cafe" element={<Cafe />} />
        <Route path="events" element={<Events />} />
      </Route>
    </Routes>
  );
}
