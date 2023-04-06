import "./App.css";
import { Header } from "./components/Header/Header";
import { Nabar } from "./components/Navbar/Nabar";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Nabar />

      <Home />
    </div>
  );
}

export default App;
