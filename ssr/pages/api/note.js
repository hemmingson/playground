import prisma from '@/utils/prisma'

export default async (req, res) => {
  switch (req.method) {
    case 'GET': {
      const notes = await prisma.note.findMany()
      res.status(200).json(notes)
      break
    }
    case 'POST': {
      const data = JSON.parse(req.body)
      const note = await prisma.note.create({ data })
      res.status(200).json(note)
      break
    }
  }
}
