import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioService {
  private usuarios = [];

  public criar(usuario) {
    this.usuarios.push(usuario);
    return usuario;
  }
}
