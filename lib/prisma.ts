import "dotenv/config";
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/client'

const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ 
  connectionString,
  max: 3, // 接続数を増やしてパフォーマンス向上
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000, // タイムアウト短縮
})

const adapter = new PrismaPg(pool)

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({ 
    adapter,
    log: ['error'], // クエリログを無効化してパフォーマンス向上
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma