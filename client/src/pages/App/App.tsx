import Home  from "../Home/Home";
import { Login } from "../Login/Login";
import { SignUp } from "../SignUp/SignUp";
import { Profile } from "../Profile/Profile";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  );
}

export default App;
