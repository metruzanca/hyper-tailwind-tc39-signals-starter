import { Signal } from "signal-polyfill";
import h from 'hyperscript'
import './style.css'
import effect from "./effect";

const Counter = () => {
  const signal = new Signal.State(0)
  
  const display = h('div')
  effect(() => {    
    display.textContent = signal.get().toString()
  })
  
  return h('div.flex.flex-col.items-center',
    display,
    h('button.bg-neutral-300.px-1.rounded.hover:bg-neutral-400', 'Increment', { onclick: () => signal.set(signal.get() + 1)})
  )
}

document.querySelector<HTMLDivElement>('#app')!.append(
  h('div.w-screen.h-screen.flex.flex-col.justify-center.items-center',
    h('h1.text-3xl.py-2.underline', 'Hello, World!'),
    h('p', [
      'This is a basic app starter developed with ',
      h('a.text-blue-600', 'Hyperscript', { href: 'https://www.npmjs.com/package/tailwindcss' }),
      ', ',
      h('a.text-blue-600', 'Tailwind', { href: 'https://www.npmjs.com/package/tailwindcss' }),
      ' and ',
      h('a.text-blue-600', 'Tc39 Signals', { href: 'https://github.com/tc39/proposal-signals' }),
      '.'
    ]),
    Counter(),
  )
)