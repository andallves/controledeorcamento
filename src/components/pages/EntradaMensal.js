import { useState } from 'react'
import Input from '../button/Input';
import styles from './EntradaMensal.module.css'
function EntradaMensal() {
    

    const [salario, setSalario] = useState();
    console.log(salario)

    return (
        <div className={styles.tela}>   
            <h1>Informe seu o valor de rendimentos recebidos mensal</h1>
            <p>valor referente ao seu salário, se houver, e/ou outros valores que você recebe.</p>
            <form>
                <Input name="Salario" text="Salario" type="number" setSalario={setSalario}/>
                <label htmlFor="salario">Salário: </label>
                <input type="number" name="salario" id="salrio" value=""/>
            </form>
        </div>
    )
}
export default EntradaMensal