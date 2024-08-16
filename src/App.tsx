import { Counter } from './Counter';
import './style.css';
import Logo from './assets/logo.png';
import typescriptLogo from './typescript.svg';

const App = () => {
  return (
    <div>
      <a href="https://farmfe.org/" target="_blank" rel="noreferrer">
        <img src={Logo} class="logo" alt="Vite logo" />
      </a>
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={typescriptLogo} class="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1>Farm + TypeScript</h1>
      <div class="card">
        <Counter />
      </div>
      <p class="read-the-docs">
        Click on the Farm and TypeScript logos to learn more
      </p>
    </div>
  );
};

export default App;
