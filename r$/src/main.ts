// create
import { fromEvent } from 'rxjs'
// control flow
import { throttleTime, scan } from 'rxjs/operators'
// transform value
import { map } from 'rxjs/operators'

import './style.css'

let age = 25

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <span>🤡</span>
  <p>${age}</p>
`

const el = document.getElementsByTagName('span')[0]
const counter = document.getElementsByTagName('p')[0]

const css = {
  cursor: 'pointer',
}

el.addEventListener('mousemove', () => {
  Object.entries(css).forEach(([k, v]: string[]) => {
    ;(el.style as unknown as { [key: string]: string })[k] = v
  })
})

const click$ = fromEvent<MouseEvent>(el, 'click').pipe(
  throttleTime(31_556_952_000),
  map((e) => {
    console.log(e)
    return 1
  }),
  scan((count, x) => count + x, age)
)

click$.subscribe((count) => {
  counter.textContent = count + ''
})
