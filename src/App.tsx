import './styles/global.css';
import './styles/theme.css';
import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form action=''>

          <div>
            <label htmlFor="">Task</label>
            <input id="meuinput" type="text" />
          </div>
          <div>
            linha verde
          </div>
          <div>
            <p>ciclos</p>
          </div>
          <button>Enviar</button>
        </form>
      </Container>

      <Container>
        <Heading> Logo </Heading>
      </Container>

      <Container>
        <Heading> Menu </Heading>
      </Container>
    </>
  )
}


