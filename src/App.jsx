import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Nabar } from "./components/Navbar/Nabar";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Setting } from "./pages/Setting/Setting";
import { Singlearticle } from "./pages/SingleArticle/Singlearticle";
import { Write } from "./pages/Write/Write";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register/Register";
function App() {
  const [isLogged, setIsLogged] = useState(true);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Singlearticle />} />
        {isLogged ? (
          <Route path="/writepost" element={<Write />} />
        ) : (
          <Route path="/writepost" element={<Login />} />
        )}

        <Route path="/setting" element={<Setting />} />

        {isLogged ? <></> : <></>}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
