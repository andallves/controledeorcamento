import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Container from "./components/layout/Container";
import FormEntrada from "./components/pages/FormEntrada";
import SpreadSheet from "./components/pages/SpreadSheet";
import TelaInicial from "./components/pages/TelaInicial";

import Home from "./components/pages/Home";
import Dividas from "./components/pages/Dividas";
import Cadastro from "./components/pages/Cadastro";

export const AppRoutes = () => {
  return (
    <Router>
    <Container>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/cadastro" element={<Cadastro />} >
          <Route path="/cadastro/entrada" element={<FormEntrada />} />
          <Route path="/cadastro/dividas" element={<Dividas /> } />
        </Route>
        <Route path="/home" element={<Home />}>
          <Route path="/home/spreadsheet" element={<SpreadSheet />} />
        </Route>

      </Routes>
    </Container>

  </Router>
  )
};
