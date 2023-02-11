import { Link } from "react-router-dom";
import styles from './StartButton.module.css';

const StartButton = ({to, text}) => {
    return(
        <Link className={styles.btn_tela_inicial} to={to}>
            {text}
        </Link>
    )
}

export default StartButton