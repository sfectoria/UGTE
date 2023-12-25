import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Members from "./domains/members/Members";
import ViewMember from "./domains/members/views/ViewMember";
import MemberList from "./domains/members/views/MemberList";

function App() {
  return (
    <div className="position-fixed w-100 h-100 d-flex">
      <BrowserRouter>
        <Sidebar />
        <div className="h-100 w-100">
          <Routes>
            <Route path="members" element={<Members />}>
              <Route index element={<MemberList />} />
              <Route path=":memberId" element={<ViewMember />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
