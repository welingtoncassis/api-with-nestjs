import { Injectable } from '@nestjs/common';
import { Usuario } from '../entity/usuario.entity';

@Injectable()
export class UsuarioService {
  private usuarios: Usuario[] = [
    {
      nome: 'welington',
      id: 1,
      login: 'welington',
      email: 'w@gmail.com',
      senha: '123456',
      dataDeEntrada: new Date(),
    },
  ];

  public buscarUsuarioPeloNome(login: string): Usuario {
    return this.usuarios.find((usuario) => usuario.login === login);
  }

  public criar(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    return usuario;
  }
}
