import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { FetchAllService } from '../shared/fetch-all/fetch-all.service';
@Injectable()
export class SpeciesService {
  private readonly swapiUrl = 'https://swapi.tech/api/pecies';
  constructor(private readonly fetchAllService: FetchAllService) {}
  async getAllSpecies(page: number = 1) {
    return this.fetchAllService.fetchAllEntries('species');
  }

  async getSpecieById(id: string) {
    const { data } = await axios.get(`${this.swapiUrl}/${id}`);
    return data;
  }
}
