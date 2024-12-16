import { Controller, Get, Param, Query } from '@nestjs/common';
import { PlanetsService } from './planets.service';

@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Get()
  async getAllFilms(@Query('page') page?: number) {
    return this.planetsService.getAllPlanets(page);
  }

  @Get(':id')
  async getFilmById(@Param('id') id: string) {
    return this.planetsService.getPlanetById(id);
  }
}
