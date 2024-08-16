import { signal } from '@preact/signals';
import { html } from 'htm/preact';

export const Counter = () => {
  const counter = signal(0);

  return html`
    <button id="counter" type="button" onClick=${() => counter.value++}>
      count is ${counter}
    </button>
  `;
};
