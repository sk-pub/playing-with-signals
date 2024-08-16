import { Signal } from "signal-polyfill";
import { effect } from "./effect";
import { html } from "htm/preact";
import { render } from "preact";

export function setupCounter(element: HTMLElement) {
  let counter = new Signal.State(0);

  effect(() => {
    let template = html`
      <button id="counter" type="button" onClick=${() => counter.set(counter.get() + 1)}>
        count is ${counter.get()}
      </button>
    `;

    render(template, element);
  });
}
