import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
/*import { Strategy } from 'passport-local';*/
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'kjdhfkjghskohg',
    });
  }

  async validate(payload: any) {
    console.log('Validate JWT Strategy with JWT');
    console.log('JWT_SECRET from .env:', process.env.JWT_SECRET);
    return { userId: payload.sub, email: payload.email }; // Return payload with relevant user details
  }
}
