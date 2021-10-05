const fetcher = (url) => fetch(url).then((res) => res.json())

const merge = (...args) => {
  const isNested = (prop) =>
    Object.prototype.toString.call(prop) === '[object Object]'

  const o = Object.create(null)

  args.forEach((arg) => {
    Object.keys(arg).forEach((attr) => {
      o[attr] = isNested(arg[attr])
        ? merge(o[attr] || {}, arg[attr])
        : arg[attr]
    })
  })

  return o
}

export { fetcher, merge }
