import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { FetchAllService } from '../shared/fetch-all/fetch-all.service';
@Injectable()
export class StarshipsService {
  private readonly swapiUrl = 'https://swapi.tech/api/starships';
  constructor(private readonly fetchAllService: FetchAllService) {}
  async getAllStarships(page: number = 1) {
    return this.fetchAllService.fetchAllEntries('starships');
  }

  async getStarshipById(id: string) {
    const { data } = await axios.get(`${this.swapiUrl}/${id}`);
    return data;
  }
}
