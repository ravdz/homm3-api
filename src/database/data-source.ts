import { DataSource } from 'typeorm';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { Town } from '@/towns/Town';
import { HeroClass } from '@/classes/Class';
import { Speciality } from '@/specialitys/Speciality';
import { Hero } from '@/heroes/Hero';
import { Unit } from '@/units/Unit';

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: path.resolve(process.cwd(), `.env.${env}`) });

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5434,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Town, HeroClass, Speciality, Hero, Unit],
  migrations: [path.join(__dirname, 'migrations', '*.{ts,js}')],
  synchronize: false,
});
