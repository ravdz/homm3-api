import { DataSource } from 'typeorm';
import dataSource from './data-source';
import { Town } from '@/towns/Town';
import { HeroClass } from '@/classes/Class';
import { Speciality } from '@/specialitys/Speciality';
import { Hero } from '@/heroes/Hero';
import { Unit } from '@/units/Unit';
import { Resource } from '@/resources/Resource';

async function runSeed() {
  await dataSource.initialize();

  const townRepo = dataSource.getRepository(Town);
  const classRepo = dataSource.getRepository(HeroClass);
  const specialityRepo = dataSource.getRepository(Speciality);
  const heroRepo = dataSource.getRepository(Hero);
  const unitRepo = dataSource.getRepository(Unit);

  const existing = await townRepo.count();
  if (existing > 0) {
    console.log('Seed already applied (towns exist). Skip.');
    await dataSource.destroy();
    return;
  }

  const castle = await townRepo.save(townRepo.create({ name: 'Castle' }));
  const rampart = await townRepo.save(townRepo.create({ name: 'Rampart' }));

  const knight = await classRepo.save(
    classRepo.create({ name: 'Knight', town: castle }),
  );
  const druid = await classRepo.save(
    classRepo.create({ name: 'Druid', town: rampart }),
  );

  const offense = await specialityRepo.save(
    specialityRepo.create({ name: 'Offense' }),
  );
  const archery = await specialityRepo.save(
    specialityRepo.create({ name: 'Archery' }),
  );

  await heroRepo.save(
    heroRepo.create({
      name: 'Lord Haart',
      town: castle,
      class: knight,
      speciality: offense,
    }),
  );
  await heroRepo.save(
    heroRepo.create({
      name: 'Ivor',
      town: rampart,
      class: druid,
      speciality: archery,
    }),
  );

  await unitRepo.save(
    unitRepo.create({
      name: 'Pikeman',
      level: 1,
      town: castle,
      cost: [{ resource: Resource.Gold, units: 60 }],
      stats: {
        min_damage: 1,
        max_damage: 3,
        attack: 4,
        defense: 5,
        health: 10,
        speed: 4,
      },
    }),
  );

  console.log('Seed completed.');
  await dataSource.destroy();
}

runSeed().catch((err) => {
  console.error(err);
  process.exit(1);
});
