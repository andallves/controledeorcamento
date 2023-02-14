import { GrFormNextLink } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import styles from './Next.module.css'

const Next = ({to}) => {
    return(
        <div >
            <Link className={styles.next_btn} to={to}>
                <GrFormNextLink />
            </Link>
        </div>
    )
}

export default Next