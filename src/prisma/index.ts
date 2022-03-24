import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const ENV = process.env.NODE_ENV || 'development';
const DB_URLS = {
  development: process.env.DATABASE_URL,
  test: process.env.DATABASE_URL_TEST,
};
const url = DB_URLS[ENV as keyof typeof DB_URLS];
console.log('testando');

const prisma = new PrismaClient({ datasources: { db: { url } } });

export default prisma;
