import { BaseRegistroHeaderLabel } from '@/cnab/444/interfaces/base-registro-header-label.interface';
import { BaseRegistroHeaderLayout } from '@/cnab/444/interfaces/base-registro-header-layout.interface';
import { PropertyPosition } from '@/decorators';
import { plainToClass } from 'class-transformer';
import {
  IsAlphanumeric,
  IsNotEmpty,
  IsOptional,
  Matches,
  MaxLength,
  validateSync,
} from 'class-validator';

/**
 * Classe que representa o registro de rótulo do cabeçalho em um arquivo CNAB 444.
 */
export class RegistroHeaderLabel
  implements BaseRegistroHeaderLabel, BaseRegistroHeaderLayout
{
  /**
   * Identificação do registro (deve ser '0').
   * @example '0'
   */
  @PropertyPosition(1, 1, true, { allowLeadingZeros: false })
  @MaxLength(1)
  IdentificacaoRegistro: string = '0';

  /**
   * Identificação do arquivo de remessa (deve ser '1').
   * @example '1'
   */
  @PropertyPosition(2, 2, true, { allowLeadingZeros: false })
  @MaxLength(1)
  IdentificacaoArquivoRemessa: string = '1';

  /**
   * Literal de remessa (deve ser 'REMESSA').
   * @example 'REMESSA'
   */
  @PropertyPosition(3, 9, true, { allowLeadingZeros: false })
  @MaxLength(7)
  LiteralRemessa: string = 'REMESSA';

  /**
   * Código do serviço (deve ser '01').
   * @example '01'
   */
  @PropertyPosition(10, 11, true, { allowLeadingZeros: false })
  @MaxLength(2)
  CodigoServico: string = '01';

  /**
   * Literal de serviço (deve ser 'COBRANCA').
   * @example 'COBRANCA'
   */
  @PropertyPosition(12, 26, true, { allowLeadingZeros: false })
  @MaxLength(15)
  LiteralServico: string = 'COBRANCA';

  /**
   * Código do originador (máximo 20 caracteres alfanuméricos).
   * @example '0123456789ABCDEF0123'
   */
  @PropertyPosition(27, 46, true, {
    allowLeadingZeros: true,
    alphanumerics: true,
  })
  @MaxLength(20)
  @IsNotEmpty()
  CodigoOriginador: string = '';

  /**
   * Nome do originador (máximo 30 caracteres).
   * @example 'NOME DO ORIGINADOR'
   */
  @PropertyPosition(47, 76, true, { allowLeadingZeros: false })
  @MaxLength(30)
  @IsNotEmpty()
  NomeOriginador: string = '';

  /**
   * Número do banco (deve ser '611').
   * @example '611'
   */
  @PropertyPosition(77, 79, true, { allowLeadingZeros: false })
  @MaxLength(3)
  NumeroBanco: string = '611';

  /**
   * Nome do banco (máximo 15 caracteres).
   * @example 'NOME DO BANCO'
   */
  @PropertyPosition(80, 94, true, { allowLeadingZeros: false })
  @MaxLength(15)
  @IsNotEmpty()
  NomeBanco: string = 'PAULISTA S A';

  /**
   * Data de gravação do arquivo (formato 'DDMMAA').
   * @example '250922'
   */
  @PropertyPosition(95, 100, true, { allowLeadingZeros: false })
  @Matches(/^([0-9]{6})$/)
  @MaxLength(6)
  DataGravacaoArquivo: string = '';

  /**
   * Campo em branco.
   * @example ''
   */
  @PropertyPosition(101, 108, true, { allowLeadingZeros: false })
  @IsOptional()
  Branco101: string = '';

  /**
   * Identificação do sistema (máximo 2 caracteres alfanuméricos).
   * @example 'MX'
   */
  @PropertyPosition(109, 110, true, { allowLeadingZeros: false })
  @IsNotEmpty()
  @MaxLength(2)
  @IsAlphanumeric('pt-BR')
  IdentificacaoSistema: string = 'MX';

  /**
   * Número sequencial do arquivo (máximo 7 dígitos).
   * @example '0000001'
   */
  @PropertyPosition(111, 117, true, { allowLeadingZeros: true })
  @IsNotEmpty()
  @MaxLength(7)
  @Matches(/^([0-9]{7})$/)
  NumeroSequencialArquivo: string = '';

  /**
   * Campo em branco.
   * @example ''
   */
  @PropertyPosition(118, 438, true, { allowLeadingZeros: false })
  @IsOptional()
  Branco118: string = '';

  /**
   * Número sequencial do registro (deve ser '000001').
   * @example '000001'
   */
  @PropertyPosition(439, 444, true, { allowLeadingZeros: true })
  @IsNotEmpty()
  @Matches(/^([0-9]{6})$/)
  @MaxLength(6)
  NumeroSequencialRegistro: string = '000001';

  constructor(props: BaseRegistroHeaderLabel) {
    Object.assign(this, props);
  }

  /**
   * Valida os dados do registro.
   * Lança um erro se os dados não forem válidos.
   */
  public validate(): void {
    const instance = plainToClass(RegistroHeaderLabel, this);
    const errors = validateSync(instance);

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }
  }
}
