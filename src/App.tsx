import { Routes, Route } from "react-router-dom";
import Login from "./page/LogIn";
import Registration from "./page/Registration";
import Start from "./page/Start";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
