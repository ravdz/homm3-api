import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClassDTO } from '@/classes/dto/create-class.dto';
import { UpdateClassDTO } from '@/classes/dto/update-class.dto';
import { HeroClass } from '@/classes/Class';
import { TownService } from '@/towns/town.service';

@Injectable()
export class ClassService {
  private townService: TownService;

  constructor(
    @Inject(forwardRef(() => TownService))
    townService: TownService,
  ) {
    this.townService = townService;
  }

  async getOneById(classId: number): Promise<HeroClass> {
    const heroClass = await HeroClass.findOne({
      where: { id: classId },
      relations: ['town', 'heroes'],
    });
    if (!heroClass) {
      throw new NotFoundException(`Class id: ${classId} not found`);
    }
    return heroClass;
  }

  readAll(): Promise<HeroClass[]> {
    return HeroClass.find();
  }

  async readOne(classId: number): Promise<HeroClass> {
    const specifyClass = await this.getOneById(classId);
    return specifyClass;
  }

  async create(heroClass: CreateClassDTO): Promise<HeroClass> {
    const newHeroClass = new HeroClass();
    Object.assign(newHeroClass, heroClass);
    newHeroClass.town = await this.townService.getOneById(heroClass.townId);
    await newHeroClass.save();
    return await this.getOneById(newHeroClass.id);
  }

  async update(heroClass: UpdateClassDTO): Promise<HeroClass> {
    const classToUpdate = await this.getOneById(heroClass.id);
    Object.assign(classToUpdate, heroClass);
    classToUpdate.town = await this.townService.getOneById(heroClass.townId);
    await classToUpdate.save();
    return await this.getOneById(heroClass.id);
  }

  async delete(classId: number): Promise<HeroClass> {
    const classToRemove = await this.getOneById(classId);
    return classToRemove.remove();
  }
}
