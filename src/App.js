import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import List from "./Screens/list";
import Upload from "./Screens/upload";
import Login from "./Screens/login";
import { useEffect, useState } from "react";
import Header from "./components/header";
function App() {
  const [token, setToken] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setToken(token);
  }, []);
  if (!token) return <Login setToken={setToken} />;
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/upload" element={<Upload />} />
        {/* <Route path="/profile" element={<List />} />
        <Route path="/upload" element={<List />} /> */}
      </Routes>
    </div>
  );
}

export default App;
