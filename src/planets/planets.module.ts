import { Module } from '@nestjs/common';
import { PlanetsController } from './planets.controller';
import { PlanetsService } from './planets.service';
import { FetchAllService } from 'src/shared/fetch-all/fetch-all.service';

@Module({
  controllers: [PlanetsController],
  providers: [PlanetsService, FetchAllService],
})
export class PlanetsModule {}
