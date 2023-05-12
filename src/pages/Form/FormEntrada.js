
import Input from '../button/Input';
import styles from './FormEntrada.module.css';

function FormEntrada({ handleEnviar }) {

    const send = (e) => {
        e.preventDefault()

        const salary = document.querySelector('#salary');
        const bonus = document.querySelector('#bonus')
        const handleEnviar = ({ salary, bonus }) => {
            return ({ salary, bonus });
        }
    }

    return (
        <div className={styles.tela}>
            <h2>Informe seu o valor de rendimentos recebidos mensal</h2>
            <p>valor referente ao seu salário, se houver, e/ou outros valores que você recebe.</p>
            <form onSubmit={send}>
                <Input name="salary" text="Salario" type="number" placeholder="Sálario fixo" />
                <Input name="bonus" text="Extra" type="number" placeholder="Valor extra" />
            </form>


        </div>
    )
}
export default FormEntrada