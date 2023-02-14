import styles from './Input.module.css'

const Input = ({type, text, name, placeholder, setSalario}) => {
    return (
        <div className={styles.btn} >
            <label htmlFor={name}>{text}: </label>
            <input 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={(e) => setSalario(e.target.value)}
                required
            />
        </div>
    )
}
export default Input