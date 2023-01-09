import { Routes, Route } from "react-router-dom";
const Index = require("./pages/Index");
const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />}></Route>
    </Routes>
  );
};

export default routes;
