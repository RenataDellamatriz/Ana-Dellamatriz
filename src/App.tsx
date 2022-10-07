import "./App.css";
import Contato from "./pages/contato";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Localizacao from "./pages/localizacao";
import TesteMapa from "./pages/testemapa";

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/local" element={<Localizacao />} />
        <Route path="/testemapa" element={<TesteMapa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
