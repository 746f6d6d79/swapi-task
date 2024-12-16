import { Controller, Get, Param, Query } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehicleService: VehiclesService) {}

  @Get()
  async getAllFilms(@Query('page') page?: number) {
    return this.vehicleService.getAllVehicles();
  }

  @Get(':id')
  async getFilmById(@Param('id') id: string) {
    return this.vehicleService.getVehicleById(id);
  }
}
