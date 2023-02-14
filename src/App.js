import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Container from "./components/layout/Container";
import EntradaMensal from "./components/pages/EntradaMensal";
import SpreadSheet from "./components/pages/SpreadSheet";
import TelaInicial from "./components/pages/TelaInicial";

import Home from "./components/pages/Home";
import Dividas from "./components/pages/Dividas";


function App() {

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<TelaInicial />} />
          <Route path="/entradamensal" element={<EntradaMensal />} />
          <Route path="/divida" element={<Dividas /> } />
          <Route path="/home" element={<Home />}>
            <Route path="/home/spreadsheet" element={<SpreadSheet />} />
          </Route>
          
        </Routes>
      </Container>
      
    </Router>
  );
}

export default App;
