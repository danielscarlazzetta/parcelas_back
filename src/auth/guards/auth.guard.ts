import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../interfaces/jwt-payload';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(
    private jwtServices: JwtService,
    private authServices: AuthService,
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException({ msg: 'token no valido' });
    }

    try {
      const payload = await this.jwtServices.verifyAsync<JwtPayload>(
        token, { secret: process.env.JWT_SEED });
      

        const user = await this.authServices.findUserById( payload.id );
        if( !user ) throw new UnauthorizedException({msg: 'No existe el usuario'});
        if( !user.isActive ) throw new UnauthorizedException({msg: 'Usuario no esta activo'});

      request['user'] = user;

    } catch (error) {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
