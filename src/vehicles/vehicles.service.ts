import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { FetchAllService } from '../shared/fetch-all/fetch-all.service';
@Injectable()
export class VehiclesService {
  private readonly swapiUrl = 'https://swapi.tech/api/vehicles';
  constructor(private readonly fetchAllService: FetchAllService) {}
  async getAllVehicles() {
    return this.fetchAllService.fetchAllEntries('vehicles');
  }

  async getVehicleById(id: string) {
    const { data } = await axios.get(`${this.swapiUrl}/${id}`);
    return data;
  }
}
