import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { PoemService } from './poem/poem.service';
import { PoemController } from './poem/poem.controller';
import { PoemModule } from './poem/poem.module';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_URL || 'localhost',
      port: parseInt(process.env.DATABASE_PORT,10) || 5432,
      username: process.env.DATABASE_USER ||'postgres',
      password: process.env.DATABASE_PASSWORD || 'postgres',
      database: process.env.DATABASE_NAME || 'poetry-site',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
      UserModule,
      PoemModule,
      CategoryModule,],
  controllers: [AppController, UserController, PoemController, CategoryController],
  providers: [AppService, UserService, PoemService, CategoryService],
})
export class AppModule {}
