import { Routes, Route } from "react-router-dom";
import Game from "./page/Game";
import LogIn from "./page/LogIn";
import LoginOrSignUp from "./page/LoginOrSignUp";
import Match from "./page/Match";
import Profile from "./page/Profile";
import SignUp from "./page/SignUp";
import Start from "./page/Start";
import NavBar from "./page/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
        <Route path="/start" element={<LoginOrSignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/findMatch" element={<Match />} />
      </Routes>
    </>
  );
}

export default App;
