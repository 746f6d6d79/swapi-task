import { Module } from '@nestjs/common';
import { StarshipsController } from './starships.controller';
import { StarshipsService } from './starships.service';
import { FetchAllService } from 'src/shared/fetch-all/fetch-all.service';

@Module({
  controllers: [StarshipsController],
  providers: [StarshipsService, FetchAllService],
})
export class StarshipsModule {}
