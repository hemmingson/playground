import { useState, useCallback } from 'preact/hooks'

import { Box, Input, Item } from '@/components'
import { useRefresh } from '@/utils/hooks'

const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/note')
  const notes = await res.json()
  return { props: { notes } }
}

const Note = ({ notes }) => {
  const refresh = useRefresh()

  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')

  const addNote = useCallback(async () => {
    await fetch('http://localhost:3000/api/note', {
      method: 'POST',
      body: JSON.stringify({ title, link }),
    })
    setTitle('')
    setLink('')
    refresh()
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() === '' || link.trim() === '') console.log('invalid input')
    else addNote()
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Input type="text" value={title} setter={setTitle} />
        <Input type="text" value={link} setter={setLink} />
        <Input style={{ margin: '0 auto' }} type="submit" value="add" />
      </form>
      {notes.map(({ id, title, link }) => (
        <Item key={id} title={title} href={link} />
      ))}
    </Box>
  )
}

export { getServerSideProps }
export default Note
