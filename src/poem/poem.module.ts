import { Module } from '@nestjs/common';
import { PoemController } from "./poem.controller";
import { PoemService } from "./poem.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PoemEntity } from "./poem.entity";

@Module({
  imports: [TypeOrmModule.forFeature([PoemEntity])],
  controllers: [PoemController],
  providers: [PoemService]
})
export class PoemModule {}
