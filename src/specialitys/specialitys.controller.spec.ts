import { Test, TestingModule } from '@nestjs/testing';
import { SpecialitysController } from '@/specialitys/specialitys.controller';

describe('SpecialityController', () => {
  let controller: SpecialitysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialitysController],
    }).compile();

    controller = module.get<SpecialitysController>(SpecialitysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
