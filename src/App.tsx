import './styles/global.css';
import './styles/theme.css';
import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import {Cycles} from './components/Cycles';

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
        <form className= 'form' action = ''>

          <div>
            <label htmlFor="">Task</label>
            <input id="meuinput" type="text"
            placeholder='Digite Algo' />
          </div>
          <div className='formRow'>
            linha verde
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <button>Enviar</button>
        </form>
      </Container>

      <Container>
      <DefaultInput />
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


