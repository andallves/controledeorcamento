import { Link } from 'react-router-dom';
import Container from '../Container';

import './styles.css';

const Navbar = () => {
  return (
    <nav>
      <Container>
        <ul>
          <li>
            <Link to={'/spreadsheet'}>Visão geral</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};
export default Navbar;
