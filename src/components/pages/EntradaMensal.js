function EntradaMensal() {
    return (
        <>   
            <h2>Informe seu o valor de rendimentos recebidos mensal</h2>
            <p>valor referente ao seu salário, se houver, e/ou outros valores que você recebe.</p>
            <form>
                <label htmlFor="salario">Salário: </label>
                <input type="number" name="salario" id="salrio" value=""/>
            </form>
        </>
    )
}
export default EntradaMensal