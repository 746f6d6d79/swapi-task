import { Module } from '@nestjs/common';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { FetchAllService } from 'src/shared/fetch-all/fetch-all.service';

@Module({
  controllers: [FilmsController],
  providers: [FilmsService, FetchAllService],
})
export class FilmsModule {}
