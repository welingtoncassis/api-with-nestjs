import { Module } from '@nestjs/common';
import { UsuarioController } from './controllers/usuario.controller';
import { IsUserAlreadyExistConstraint } from './decorators/is-nome-usuario-unico.validator';
import { UsuarioService } from './services/usuario.service';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioService, IsUserAlreadyExistConstraint],
})
export class UsuarioModule {}
