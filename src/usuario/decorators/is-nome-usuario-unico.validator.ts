import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsuarioService } from '../services/usuario.service';
// https://github.com/typestack/class-validator#custom-validation-decorators

@Injectable()
@ValidatorConstraint({ async: true })
export class IsUserAlreadyExistConstraint
  implements ValidatorConstraintInterface
{
  constructor(private usarioService: UsuarioService) {}

  validate(userName: any, args?: ValidationArguments): boolean {
    return !!!this.usarioService.buscarUsuarioPeloNome(userName);
  }
}

export function IsNomeDeUsuarioUnico(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUserAlreadyExistConstraint,
    });
  };
}
