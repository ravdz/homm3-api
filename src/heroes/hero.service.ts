import { Injectable, NotFoundException } from '@nestjs/common';
import { Hero } from '@/heroes/Hero';

@Injectable()
export class HeroService {
  async getOneById(heroId: number): Promise<Hero> {
    const hero = await Hero.findOne({ where: { id: heroId } });
    if (!hero) {
      throw new NotFoundException(`Hero id: ${heroId} not found`);
    }
    return hero;
  }

  readAll(): Promise<Hero[]> {
    return Hero.find();
  }

  async readOne(heroId: number): Promise<Hero> {
    const specifyHero = await this.getOneById(heroId);
    return specifyHero;
  }
}
