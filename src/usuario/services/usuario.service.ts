import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entity/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  public buscarUsuarioPeloNome(login: string): Promise<Usuario[]> {
    return this.usuarioRepository.find({ where: { login: login } });
  }

  public criar(usuario: Usuario): Promise<Usuario> {
    return this.usuarioRepository.save(usuario);
  }
}
