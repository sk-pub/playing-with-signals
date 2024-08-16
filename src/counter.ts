import { Signal } from "signal-polyfill";
import { effect } from "./effect";


export function setupCounter(element: HTMLButtonElement) {
  let counter = new Signal.State(0);
  effect(() => {
    element.innerHTML = `count is ${counter.get()}`;
  });


  element.addEventListener('click', () => {
    counter.set(counter.get() + 1);
  });
}
