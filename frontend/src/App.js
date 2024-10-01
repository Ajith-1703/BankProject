import "./App.css";
import Home from "../src/Components/Pages/Home/Home";
import LoginPage from "../src/Components/LoginPage/LoginPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
