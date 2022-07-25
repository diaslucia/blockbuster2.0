import './App.css';
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/AppContext";
import LoginPage from "./components/pages/LoginPage";
import Home from "./components/pages/Home";
import Detail from "./components/pages/Detail";

function App() {
  return (
    <DataProvider>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
