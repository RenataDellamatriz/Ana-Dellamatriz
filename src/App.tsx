import './index.css'

import Contato from "./pages/contato";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Localizacao from "./pages/localizacao";

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/local" element={<Localizacao />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
