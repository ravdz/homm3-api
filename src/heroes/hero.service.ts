import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Hero } from '@/heroes/Hero';
import { CreateHeroDTO } from './dto/create-hero.dto';
import { UpdateHeroDTO } from './dto/update-hero.dto';
import { ClassService } from '@/classes/class.service';
import { SpecialityService } from '@/specialitys/speciality.service';
import { TownService } from '@/towns/town.service';

@Injectable()
export class HeroService {
  private classService: ClassService;
  private specialityService: SpecialityService;
  private townService: TownService;

  constructor(
    @Inject(forwardRef(() => ClassService)) classService: ClassService,
    @Inject(forwardRef(() => SpecialityService))
    specialityService: SpecialityService,
    @Inject(forwardRef(() => TownService))
    townService: TownService,
  ) {
    this.classService = classService;
    this.specialityService = specialityService;
    this.townService = townService;
  }

  async getOneById(heroId: number): Promise<Hero> {
    const hero = await Hero.findOne({
      where: { id: heroId },
      relations: ['class', 'speciality', 'town'],
    });
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

  async create(hero: CreateHeroDTO): Promise<Hero> {
    const newHero = new Hero();
    Object.assign(newHero, hero);
    newHero.class = await this.classService.getOneById(hero.classId);
    newHero.speciality = await this.specialityService.getOneById(
      hero.specialityId,
    );
    newHero.town = await this.townService.getOneById(hero.townId);
    await newHero.save();
    return await this.getOneById(newHero.id);
  }

  async update(hero: UpdateHeroDTO): Promise<Hero> {
    const heroToUpdate = await this.getOneById(hero.id);
    Object.assign(heroToUpdate, hero);
    heroToUpdate.class = await this.classService.getOneById(hero.classId);
    heroToUpdate.speciality = await this.specialityService.getOneById(
      hero.specialityId,
    );
    heroToUpdate.town = await this.townService.getOneById(hero.townId);
    await heroToUpdate.save();
    return await this.getOneById(hero.id);
  }

  async delete(heroId: number): Promise<Hero> {
    const heroToRemove = await this.getOneById(heroId);
    return heroToRemove.remove();
  }
}
