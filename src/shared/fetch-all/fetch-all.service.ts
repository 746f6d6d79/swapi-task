import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FetchAllService {
  async fetchAllEntries(resourcePath: string): Promise<any[]> {
    const results = [];
    let currentPage = 1;
    const limit = 10; // Default page size

    try {
      const { data } = await axios.get(
        `https://swapi.tech/api/${resourcePath}?page=${currentPage}&limit=${limit}`,
      );
      console.log(data);
      const total = data.result.lenght;
      const totalPages = Math.ceil(total / limit);

      while (currentPage <= totalPages) {
        const { data: pageData } = await axios.get(
          `https://swapi.tech/api/${resourcePath}?page=${currentPage}&limit=${limit}`,
        );
        results.push(...pageData.results);

        currentPage++;
      }

      return results;
    } catch (error) {
      throw new HttpException(
        `Failed to fetch ${resourcePath} data from SWAPI`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
