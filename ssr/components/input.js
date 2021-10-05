import { h } from 'preact'

import { merge } from '@/utils'

const css = {
  display: 'block',
  marginBottom: 10,
}

const Input = ({ style = {}, type, value, setter }) => {
  const handleChange = (e) => {
    setter(e.target.value)
  }

  return h('input', {
    style: Object.entries(style).length === 0 ? css : merge(css, style),
    type,
    value,
    ...(!!setter && { onChange: handleChange }),
  })
}

export { Input }
