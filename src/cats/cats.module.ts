/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
//import { GraphQLModule } from '@nestjs/graphql';
import { CatsResolver } from './cats.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './cats.schema';
import { CatsService } from './cats.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  providers: [CatsResolver,CatsService],
})
export class CatsModule {}
