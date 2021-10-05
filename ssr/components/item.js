import { useCallback, useMemo } from 'preact/hooks'

const css = {
  width: 150,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const reg = /\bhttps?:\/\/(?:www.|ww2.)?((?:[\w-]+.){1,}\w+)\b/

const Item = ({ title, href }) => {
  const handleClick = useCallback(() => {
    console.log(href)
  }, [])

  const domain = useMemo(() => reg.exec(href)[1], [href])

  return (
    <div style={css} onClick={handleClick}>
      <span>{title}</span>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {domain}
      </a>
    </div>
  )
}

export { Item }
