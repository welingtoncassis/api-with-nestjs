import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsNomeDeUsuarioUnico } from '../decorators/is-nome-usuario-unico.validator';

export class Usuario {
  id: number;

  @IsNomeDeUsuarioUnico({
    message: 'Nome de usuário já cadastrado.',
  })
  @IsNotEmpty({
    message: 'Login é obrigatório',
  })
  @IsString()
  login: string;

  @IsEmail(
    {},
    {
      message: 'Email deve ter um formato válido',
    },
  )
  email: string;

  @Exclude({
    toPlainOnly: true,
  })
  @IsNotEmpty({
    message: 'Senha é obrigatório',
  })
  senha: string;

  @IsNotEmpty({
    message: 'Nome é obrigatório',
  })
  nome: string;

  @Expose({
    name: 'joinDate',
  })
  dataDeEntrada: Date;
}
