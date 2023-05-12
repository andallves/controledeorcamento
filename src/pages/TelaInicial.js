import StartButton from "../button/StartButton"
import styles from "./TelaInicial.module.css"
import TelaInicialImage from "../../img/imagem_tela_inicial.png"

export const TelaInicial = () => {
    return(

            <section className={styles.section}>
                <h1>
                    Controle Orçamentário Mensal
                </h1>
                <h2>
                    Você é endividada ou costuma investir?
                </h2>
                <p>
                    Veja como está sua saúde financeira, e saiba quais os seus principais gastos cotiadiano e como você pode tomar o controle sua vida financeira, podendo então conquistar tudo que almeja, desde uma vida instável ou até mesmo aquelas viagens que sempre estiveram presentes nos seus sonhos.
                </p>
                <h3>
                    Comece e gerencie as suas finanças agora mesmo!
                </h3>

                <div>
                    <StartButton to="/cadastro:id" text="Start" />
                    <StartButton to="/home" text="Login" />

                </div>

                <div className={styles.imagem}>
                    <img src={TelaInicialImage} alt="Organização" />
                </div>

            </section>


    )
};

