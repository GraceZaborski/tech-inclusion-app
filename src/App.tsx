import { Routes, Route } from "react-router-dom";
import LogIn from "./page/LogIn";
import LoginOrSignUp from "./page/LoginOrSignUp";
import Match from "./page/Match";
import Profile from "./page/Profile";
import Registration from "./page/Registration";
import SignUp from "./page/SignUp";
import Start from "./page/Start";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/start" element={<LoginOrSignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/findMatch" element={<Match />} />
      </Routes>
    </>
  );
}

export default App;
