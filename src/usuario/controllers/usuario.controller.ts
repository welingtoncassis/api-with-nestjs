import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Usuario } from '../entity/usuario.entity';
import { UsuarioService } from '../services/usuario.service';

@ApiTags('usuarios')
@Controller({
  version: '1',
  path: 'public/usuarios',
})
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get(':login')
  @ApiOperation({ summary: 'Buscar usuário pelo login' })
  public buscarUsuarioPeloNome(@Param('login') login: string) {
    return this.usuarioService.buscarUsuarioPeloNome(login);
  }

  @Post()
  @ApiOperation({ summary: 'Criar Usuário' })
  public criar(@Body() usuario: Usuario) {
    return this.usuarioService.criar(usuario);
  }
}
