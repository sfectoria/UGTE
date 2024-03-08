import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";

function App() {
  return (
    <div className="position-fixed w-100 h-100 d-flex">
      <Sidebar />
      <Header />
      <div className="h-100 w-100" style={{ paddingLeft: 300, paddingTop: 70 }}>
        <div className="p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
