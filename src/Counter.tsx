import { signal } from '@preact/signals';

export const Counter = () => {
  const counter = signal(0);

  return (
    <button id="counter" type="button" onClick={() => counter.value++}>
      count is {counter}
    </button>
  );
};
