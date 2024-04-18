import { Signal } from "signal-polyfill";
import { h } from "./jsx";
import effect from "./effect";

const Counter = () => {
  const signal = new Signal.State(0)
  
  let display = <div></div>
  effect(() => {    
    display.textContent = signal.get().toString()
  })

  const handleClick = () => {
    // signal.set(signal.get() + 1)
    console.log('Clicked');
  }
  
  return (
    <div className="flex flex-col items-center">
      {display}
      <button
        className="bg-neutral-300 px-1 rounded hover:bg-neutral-400"
        onClick={handleClick}
      >
        Increment
      </button>
    </div>
  )
}

export const App = () => (
  <div className="w-screen h-screen flex flex-col justify-center items-center">
    <h1 className="text-3xl py-2 underline">Hello, World!</h1>
    <p>
      This is a basic app starter developed with{' '}
      <a className="text-blue-600" href="https://www.npmjs.com/package/tailwindcss">Hyperscript</a>,{' '}
      <a className="text-blue-600" href="https://www.npmjs.com/package/tailwindcss">Tailwind</a>, and{' '}
      <a className="text-blue-600" href="https://github.com/tc39/proposal-signals">Tc39 Signals</a>.
    </p>
    <Counter />
  </div>
);