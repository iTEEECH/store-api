import { Test, TestingModule } from '@nestjs/testing';
import { MusicController } from '../../src/music/music.controller';


describe('Music Controller', () => {
  let controller: MusicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicController],
    }).compile();

    controller = module.get<MusicController>(MusicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

