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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);
  if (!token)
    return (
      <>{loading ? <div>loading...</div> : <Login setToken={setToken} />}</>
    );
  return (
    <div className="App">
      <Header setToken={setToken} />
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/list" element={<List />} />
        {/* <Route path="/profile" element={<List />} />
        <Route path="/upload" element={<List />} /> */}
      </Routes>
    </div>
  );
}

export default App;
