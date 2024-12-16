import { Test, TestingModule } from '@nestjs/testing';
import { FetchAllService } from './fetch-all.service';

describe('FetchAllService', () => {
  let service: FetchAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FetchAllService],
    }).compile();

    service = module.get<FetchAllService>(FetchAllService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
