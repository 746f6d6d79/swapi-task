import { Module } from '@nestjs/common';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';
import { FetchAllService } from 'src/shared/fetch-all/fetch-all.service';

@Module({
  controllers: [VehiclesController],
  providers: [VehiclesService, FetchAllService],
})
export class VehiclesModule {}
