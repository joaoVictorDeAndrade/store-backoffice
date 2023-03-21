import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {UserStorage} from "./Context/UserContext";

import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Clients from "./pages/Clients/Clients";

const routes = [
  {path: "/dashboard", component: <Dashboard />},
  {path: "/clientes/adicionar", component: <Clients />},
  {path: "/clientes", component: <Clients />},
];

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Login />} />
          {routes.map(item => (
            <Route
              key={item.path}
              path={item.path}
              element={<PrivateRoute>{item.component}</PrivateRoute>}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
