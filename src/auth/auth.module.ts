import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserService } from "../user/user.service";
import { User } from "../user/user.entity";

@Module({
  imports: [
    /*PassportModule,*/
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([User]),
    /*JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {expiresIn: '5h'}
    })*/],
  controllers: [AuthController],
  providers: [AuthService, UserService, /*LocalStrategy, JwtStrategy*/]
})
export class AuthModule {}
