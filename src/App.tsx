import { Routes, Route } from "react-router-dom";
import Login from "./page/LogIn";
import Match from "./page/Match";
import Profile from "./page/Profile";
import Registration from "./page/Registration";
import Start from "./page/Start";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/findMatch" element={<Match />} />
      </Routes>
    </>
  );
}

export default App;
