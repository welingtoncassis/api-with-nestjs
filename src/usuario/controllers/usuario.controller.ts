import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
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
  public async buscarUsuarioPeloNome(
    @Param('login') login: string,
  ): Promise<Usuario[]> {
    const usuario = await this.usuarioService.buscarUsuarioPeloNome(login);
    if (!usuario) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Usuário não encontrado',
      });
    }
    return usuario;
  }

  @Post()
  @ApiOperation({ summary: 'Criar Usuário' })
  public criar(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuarioService.criar(usuario);
  }
}
