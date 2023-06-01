import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '../layout/Container';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/404';

export const AppRoutes = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="#" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
};
