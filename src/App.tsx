import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { IRoute, routesList } from "./Routes/Routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesList.map((route: IRoute) => (
          <Route key={route.path} element={route.page} path={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
