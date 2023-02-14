import { useState } from 'react'
import Input from '../button/Input';
import Next from '../button/Next';
import styles from './EntradaMensal.module.css'

function EntradaMensal() {

    const EnviarValor = () => {

    }
    

    const [salario, setSalario] = useState();
    const [valorExtra, setValorExtra] = useState();
  

    return (
        <div className={styles.tela}>   
            <h1>Informe seu o valor de rendimentos recebidos mensal</h1>
            <p>valor referente ao seu salário, se houver, e/ou outros valores que você recebe.</p>
            <form>
                <Input name="Salario" text="Salario" type="number" placeholder="Sálario fixo" setSalario={setSalario}/>
                <Input name="Extra" text="Extra" type="number" placeholder="Horas extras" setValorExtra={setValorExtra}/>
                <Next to="/dividas" />
            </form>
        </div>
    )
}
export default EntradaMensal