import { Button } from '../../components/Button';
import { FcMoneyTransfer } from 'react-icons/fc';

import './styles.css';

export const Home = () => {
  return (
    <section className={'section'}>
      <h1>Controle Orçamentário Mensal</h1>
      <h2>Você é endividada ou costuma investir?</h2>
      <p>
        Veja como está sua saúde financeira, e saiba quais os seus principais
        gastos cotiadiano e como você pode tomar o controle sua vida financeira,
        podendo então conquistar tudo que almeja, desde uma vida instável ou até
        mesmo aquelas viagens que sempre estiveram presentes nos seus sonhos.
      </p>
      <h3>Comece e gerencie as suas finanças agora mesmo!</h3>

      <div>
        <Button to="/cadastro:id" text="Start" />
        <Button to="/home" text="Login" />
      </div>

      <FcMoneyTransfer className={'image'} />
    </section>
  );
};
