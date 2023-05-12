
import Next from "../button/Next"
import FormEntrada from "./FormEntrada"

const Cadastro = () => {
    const send = (e, handleSend) => {
        const formData = handleSend;

    }
    return (
        <div>

            <FormEntrada handleEnviar={handleSend} />
            <button onClick={send}>
                <Next to={'/cadastro/dividas'} />

            </button>

        </div>

    )
}
export default Cadastro