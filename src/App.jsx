import "./App.css";
import { Header } from "./components/Header/Header";
import { Nabar } from "./components/Navbar/Nabar";
import { Home } from "./pages/Home/Home";
import { Singlearticle } from "./pages/SingleArticle/Singlearticle";
import { Write } from "./pages/Write/Write";

function App() {
  return (
    <div className="App">
      <Nabar />

      {/* <Home /> */}
      {/* <Singlearticle /> */}
      <Write />
    </div>
  );
}

export default App;
