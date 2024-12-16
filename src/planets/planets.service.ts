import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { FetchAllService } from '../shared/fetch-all/fetch-all.service';
@Injectable()
export class PlanetsService {
  private readonly swapiUrl = 'https://swapi.tech/api/planets';
  constructor(private readonly fetchAllService: FetchAllService) {}
  async getAllPlanets(page: number = 1) {
    return this.fetchAllService.fetchAllEntries('planets');
  }

  async getPlanetById(id: string) {
    const { data } = await axios.get(`${this.swapiUrl}/${id}`);
    return data;
  }
}
