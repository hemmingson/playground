import { PrismaClient } from '@prisma/client'

const isProd = process.env.NODE_ENV === 'production'

if (!global.prisma) global.prisma = new PrismaClient()

const prisma = isProd ? new PrismaClient() : global.prisma

export default prisma
