import './App.css';
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/AppContext";
import LoginPage from "./components/pages/LoginPage";
import Home from "./components/pages/Home";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
