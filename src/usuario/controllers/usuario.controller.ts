import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsuarioService } from '../services/usuario.service';

@ApiTags('usuarios')
@Controller({
  version: '1',
  path: 'public/usuarios',
})
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  @ApiOperation({ summary: 'Criar Usuário' })
  public criar(@Body() usuario) {
    return this.usuarioService.criar(usuario);
  }
}
