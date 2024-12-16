import { Module } from '@nestjs/common';
import { SpeciesController } from './species.controller';
import { SpeciesService } from './species.service';
import { FetchAllService } from 'src/shared/fetch-all/fetch-all.service';
@Module({
  controllers: [SpeciesController],
  providers: [SpeciesService, FetchAllService],
})
export class SpeciesModule {}
