import { Counter } from './Counter';
import './style.css';
import Logo from './assets/logo.png';
import typescriptLogo from './typescript.svg';

import { html } from 'htm/preact';
import { render } from 'preact';

const root = document.querySelector<HTMLDivElement>('#root');
if (root) {
  render(
    html`
    <div>
      <a href="https://farmfe.org/" target="_blank">
        <img src="${Logo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1><s>Farm</s>Preact + TypeScript</h1>
      <div class="card">
        <${Counter} id="counter" />
      </div>
      <p class="read-the-docs">
        Click on the Farm and TypeScript logos to learn more
      </p>
    </div>
  `,
    root,
  );
}
