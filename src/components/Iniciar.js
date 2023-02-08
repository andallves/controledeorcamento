import EntradaMensal from "./EntradaMensal"

function Iniciar() {
    function Começar() {
        return (
            <EntradaMensal/>
        )
    }
    return (
        <button type="button" onClick={Começar}>Iniciar</button>
    )
}
export default Iniciar