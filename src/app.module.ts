import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsModule } from './films/films.module';
import { SpeciesModule } from './species/species.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { StarshipsModule } from './starships/starships.module';
import { PlanetsModule } from './planets/planets.module';
import { FetchAllService } from './shared/fetch-all/fetch-all.service';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: 'starwars.db',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
    FilmsModule,
    SpeciesModule,
    VehiclesModule,
    StarshipsModule,
    PlanetsModule,
  ],
  controllers: [AppController],
  providers: [AppService, FetchAllService],
})
export class AppModule {}
