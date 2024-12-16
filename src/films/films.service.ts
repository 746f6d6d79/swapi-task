import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { FetchAllService } from '../shared/fetch-all/fetch-all.service';

@Injectable()
export class FilmsService {
  private readonly swapiUrl = 'https://swapi.tech/api/films';
  constructor(private readonly fetchAllService: FetchAllService) {}

  async getAllFilms(page: number = 1) {
    const data = await this.fetchAllService.fetchAllEntries('films');
    console.log(data);
    return data;
  }

  async getFilmById(id: string) {
    const { data } = await axios.get(`${this.swapiUrl}/${id}`);
    return data;
  }
}
