import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({
    message: 'Login é obrigatório',
  })
  @IsString()
  login: string;

  @Column()
  @IsEmail(
    {},
    {
      message: 'Email deve ter um formato válido',
    },
  )
  email: string;

  @Column()
  @Exclude({
    toPlainOnly: true,
  })
  @IsNotEmpty({
    message: 'Senha é obrigatório',
  })
  senha: string;

  @Column()
  @IsNotEmpty({
    message: 'Nome é obrigatório',
  })
  nome: string;

  @Column()
  @Expose({
    name: 'joinDate',
  })
  dataDeEntrada: Date;
}
