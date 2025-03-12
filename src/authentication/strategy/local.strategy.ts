import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ValidateUserUseCase } from '../services/usecases/validate-user.usecase';
import { User } from 'src/users/entities/user.entity';
import { AuthDITokens } from '../di/auth-tokens.di';
import { UserDiTokens } from 'src/users/di/user-tokens.di';
import { FindUserByEmailUseCase } from 'src/users/services/usecases/find-user-by-email.usecase';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(AuthDITokens.ValidateUserService)
    private readonly validateUserService: ValidateUserUseCase,
    @Inject(UserDiTokens.FindUserByEmailService)
    private readonly findUserByEmailService: FindUserByEmailUseCase
  ) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string): Promise<User> {
    const foundUser = await this.findUserByEmailService.execute({email});

    const user = await this.validateUserService.execute({user: foundUser, inputedPassword: password});
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}