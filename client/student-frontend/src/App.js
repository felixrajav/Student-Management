import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Addstudent from "./Addstudent";
import EditStudent from "./components/EditStudent";
import DeleteStudent from "./components/DeleteStudent";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Addstudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
          <Route path="/delete/:id" element={<DeleteStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
