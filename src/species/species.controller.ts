import { Controller, Get, Param, Query } from '@nestjs/common';
import { SpeciesService } from './species.service';

@Controller('species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Get()
  async getAllSpecie(@Query('page') page?: number) {
    return this.speciesService.getAllSpecies(page);
  }

  @Get(':id')
  async getSpecieById(@Param('id') id: string) {
    return this.speciesService.getSpecieById(id);
  }
}
