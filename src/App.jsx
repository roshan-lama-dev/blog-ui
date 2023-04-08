import "./App.css";
import { Header } from "./components/Header/Header";
import { Nabar } from "./components/Navbar/Nabar";
import { Home } from "./pages/Home/Home";
import { Setting } from "./pages/Setting/Setting";
import { Singlearticle } from "./pages/SingleArticle/Singlearticle";
import { Write } from "./pages/Write/Write";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlearticle" element={<Singlearticle />} />
        <Route path="/writepost" element={<Write />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
