import { Injectable, NotFoundException } from '@nestjs/common';
import { Speciality } from '@/specialitys/Speciality';
import { CreateSpecialityDTO } from '@/specialitys/dto/create-speciality.dto';
import { UpdateSpecialityDTO } from '@/specialitys/dto/update-speciality.dto';

@Injectable()
export class SpecialityService {
  async getOneById(specialityId: number): Promise<Speciality> {
    const speciality = await Speciality.findOne({
      where: { id: specialityId },
      relations: ['heroes'],
    });
    if (!speciality) {
      throw new NotFoundException(`Speciality id: ${specialityId} not found`);
    }
    return speciality;
  }

  readAll(): Promise<Speciality[]> {
    return Speciality.find();
  }

  async readOne(specialityId: number): Promise<Speciality> {
    const specifySpeciality = await this.getOneById(specialityId);
    return specifySpeciality;
  }

  create(speciality: CreateSpecialityDTO): Promise<Speciality> {
    const newSpeciality = new Speciality();
    Object.assign(newSpeciality, speciality);
    return newSpeciality.save();
  }

  async update(speciality: UpdateSpecialityDTO): Promise<Speciality> {
    const specialityToUpdate = await this.getOneById(speciality.id);
    Object.assign(specialityToUpdate, speciality);
    return specialityToUpdate.save();
  }

  async delete(specialityId: number): Promise<Speciality> {
    const specialityToRemove = await this.getOneById(specialityId);
    return specialityToRemove.remove();
  }
}
