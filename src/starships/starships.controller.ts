import { Controller, Get, Param, Query } from '@nestjs/common';
import { StarshipsService } from './starships.service';
@Controller('starships')
export class StarshipsController {
  constructor(private readonly starshipsService: StarshipsService) {}
  @Get()
  async getAllFilms(@Query('page') page?: number) {
    return this.starshipsService.getAllStarships(page);
  }

  @Get(':id')
  async getFilmById(@Param('id') id: string) {
    return this.starshipsService.getStarshipById(id);
  }
}
