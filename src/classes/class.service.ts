import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClassDTO } from '@/classes/dto/create-class.dto';
import { UpdateClassDTO } from '@/classes/dto/update-class.dto';
import { HeroClass } from '@/classes/Class';

@Injectable()
export class ClassService {
  async getOneById(classId: number): Promise<HeroClass> {
    const heroClass = await HeroClass.findOne({ where: { id: classId } });
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

  create(heroClass: CreateClassDTO): Promise<HeroClass> {
    const newHeroClass = new HeroClass();
    Object.assign(newHeroClass, heroClass);
    return newHeroClass.save();
  }

  async update(heroClass: UpdateClassDTO): Promise<HeroClass> {
    const classToUpdate = await this.getOneById(heroClass.id);
    Object.assign(classToUpdate, heroClass);
    return classToUpdate.save();
  }

  async delete(classId: number): Promise<HeroClass> {
    const classToRemove = await this.getOneById(classId);
    return classToRemove.remove();
  }
}
