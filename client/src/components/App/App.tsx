import Home  from "../Home/Home";
import { Login } from "../Login/Login";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
