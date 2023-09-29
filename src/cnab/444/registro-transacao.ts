import { BaseRegistroTransacao } from '@/cnab/444/interfaces/base-registro-transacao.interface';
import { Decorators } from '@/decorators';
import { plainToClass } from 'class-transformer';
import {
  IsNotEmpty,
  MaxLength,
  IsOptional,
  Matches,
  IsEmpty,
  validateSync,
} from 'class-validator';

/**
 * Classe que representa um registro de transação para CNAB 444.
 */
export class RegistroTransacao implements BaseRegistroTransacao {
  /**
   * Identificação do registro. Valor padrão é '0'.
   * @type {string}
   */
  @Decorators.PropertyPosition(1, 1, true)
  @MaxLength(1)
  @IsNotEmpty()
  IdentificacaoRegistro: string = '0';

  /**
   * Indica se é débito automático. Valor padrão é ' ' (espaço).
   * @type {string}
   */
  @Decorators.PropertyPosition(2, 20, false)
  @MaxLength(19)
  DebitoAutomatico: string = ' ';

  /**
   * Coobrigação. Valor padrão é '02'.
   * @type {string}
   */
  @Decorators.PropertyPosition(21, 22, true)
  @MaxLength(2)
  @IsNotEmpty()
  Coobrigacao: string = '02';

  /**
   * Característica especial. Valor padrão é '00'.
   * @type {string}
   */
  @Decorators.PropertyPosition(23, 24, false)
  @MaxLength(2)
  @IsNotEmpty()
  CaracteristicaEspecial: string = '00';

  /**
   * Modalidade de operação. Valor padrão é '0000'.
   * @type {string}
   */
  @Decorators.PropertyPosition(25, 28, false)
  @MaxLength(4)
  @IsNotEmpty()
  ModalidadeOperacao: string = '0000';

  /**
   * Natureza da operação. Valor padrão é '00'.
   * @type {string}
   */
  @Decorators.PropertyPosition(29, 30, false)
  @MaxLength(2)
  @IsNotEmpty()
  NaturezaOperacao: string = '00';

  /**
   * Origem dos recursos. Valor padrão é '0000'.
   * @type {string}
   */
  @Decorators.PropertyPosition(31, 34, false)
  @MaxLength(4)
  @IsNotEmpty()
  OrigemRecurso: string = '0000';

  /**
   * Classe de risco da operação. Valor padrão é 'A'.
   * @type {string}
   */
  @Decorators.PropertyPosition(35, 36, false)
  @MaxLength(2)
  @IsNotEmpty()
  ClasseRiscoOperacao: string = 'A';

  /**
   * Zeros (preenchimento). Valor padrão é '0'.
   * @type {string}
   */
  @Decorators.PropertyPosition(37, 37, false)
  Zeros37: string = '0';

  /**
   * Número de controle do participante. Deve ser preenchido.
   * @type {string}
   */
  @Decorators.PropertyPosition(38, 62, true)
  @MaxLength(25)
  @IsNotEmpty()
  NumeroControleParticipante: string = '';

  /**
   * Número do banco. Valor padrão é '000'.
   * @type {string}
   */
  @Decorators.PropertyPosition(63, 65, false)
  @MaxLength(3)
  @IsNotEmpty()
  NumeroBanco: string = '000';

  /**
   * Zeros (preenchimento). Valor padrão é '00000'.
   * @type {string}
   */
  @Decorators.PropertyPosition(66, 70, true)
  @MaxLength(5)
  @IsNotEmpty()
  Zeros66: string = '00000';

  /**
   * Identificação do título no banco. Valor padrão é '00000000000'.
   * @type {string}
   */
  @Decorators.PropertyPosition(71, 81, false)
  @MaxLength(11)
  @IsNotEmpty()
  IdentificacaoTituloBanco: string = '00000000000';

  /**
   * Dígito do nosso número. Valor padrão é ' ' (espaço).
   * @type {string}
   */
  @Decorators.PropertyPosition(82, 82, false)
  DigitoNossoNumero: string = ' ';

  /**
   * Valor pago. Valor padrão é '0000000000'.
   * @type {string}
   */
  @Decorators.PropertyPosition(83, 92, false)
  @MaxLength(10)
  @IsNotEmpty()
  ValorPago: string = '0000000000';

  /**
   * Condição de emissão de papeleta de cobrança. Valor padrão é '0'.
   * @type {string}
   */
  @Decorators.PropertyPosition(93, 93, false)
  @MaxLength(1)
  @IsNotEmpty()
  CondicaoEmissaoPapeletaCobranca: string = '0';

  /**
   * Identificação se emite papeleta para débito automático. Deve ser preenchido.
   * @type {string}
   */
  @Decorators.PropertyPosition(94, 94, false)
  IdentificacaoSeEmitePapeletaParaDebitoAutomatico: string = '';

  /**
   * Data de liquidação. Deve ser preenchida.
   * @type {string}
   */
  @Decorators.PropertyPosition(95, 100, true)
  DataLiquidacao: string = '';

  /**
   * Identificação da operação no banco. Valor padrão é ' ' (espaço).
   * @type {string}
   */
  @Decorators.PropertyPosition(101, 104, false)
  IdentificacaoOperacaoBanco: string = ' ';

  /**
   * Indicação de rateio de crédito. Valor padrão é ' ' (espaço).
   * @type {string}
   */
  @Decorators.PropertyPosition(105, 105, false)
  @IsOptional()
  @MaxLength(1)
  IndicaRateioCredito: string = ' ';

  /**
   * Endereçamento para aviso de débito automático em conta corrente. Valor padrão é '0'.
   * @type {string}
   */
  @Decorators.PropertyPosition(106, 106, false)
  EnderecamentoAvisoDebitoAutomaticoContaCorrente: string = '0';

  /**
   * Espaço em branco. Valor padrão é ' ' (espaço).
   * @type {string}
   */
  @Decorators.PropertyPosition(107, 108, false)
  Branco107: string = ' ';

  /**
   * Identificação de ocorrência. Deve ser preenchida.
   * @type {string}
   */
  @Decorators.PropertyPosition(109, 110, true)
  IdentificacaoOcorrencia: string = '01';

  /**
   * Número do documento. Deve ser preenchido.
   * @type {string}
   */
  @Decorators.PropertyPosition(111, 120, true)
  @MaxLength(10)
  @IsNotEmpty()
  NumeroDocumento: string = '';

  /**
   * Data de vencimento do título. Deve ser preenchida.
   * @type {string}
   */
  @Decorators.PropertyPosition(121, 126, true, { alphanumerics: true })
  @MaxLength(6)
  @Matches(/^([0-9]{6})$/)
  @IsNotEmpty()
  DataVencimentoTitulo: string = '';

  /**
   * Valor do título. Deve ser preenchido.
   * @type {string}
   */
  @Decorators.PropertyPosition(127, 139, true, {
    allowLeadingZeros: true,
    alphanumerics: true,
  })
  @MaxLength(13)
  @IsNotEmpty()
  ValorTitulo: string = '';

  /**
   * Banco encarregado da cobrança. Valor padrão é '000'.
   * @type {string}
   */
  @Decorators.PropertyPosition(140, 142, false)
  @MaxLength(3)
  @IsNotEmpty()
  BancoEncarregadoCobranca: string = '000';

  /**
   * Agência depositária. Valor padrão é '00000'.
   * @type {string}
   */
  @Decorators.PropertyPosition(143, 147, false)
  @MaxLength(5)
  @IsNotEmpty()
  AgenciaDepositaria: string = '00000';

  /**
   * Espécie do título. Deve ser preenchida.
   * @type {string}
   */
  @Decorators.PropertyPosition(148, 149, true)
  @MaxLength(2)
  @IsNotEmpty()
  EspecieTitulo: string = '06';

  /**
   * Identificação. Valor padrão é '1'.
   * @type {string}
   */
  @Decorators.PropertyPosition(150, 150, false)
  @MaxLength(1)
  @IsNotEmpty()
  Identificacao: string = '1';

  /**
   * Data de emissão do título. Deve ser preenchida.
   * @type {string}
   */
  @Decorators.PropertyPosition(151, 156, true, { alphanumerics: true })
  @MaxLength(6)
  @IsNotEmpty()
  @Matches(/^([0-9]{6})$/)
  DataEmissaoTitulo: string = '';

  // Propriedades adicionadas:

  /**
   * Primeira instrução. Valor padrão é '00'.
   * @type {string}
   */
  @Decorators.PropertyPosition(157, 158, false)
  @MaxLength(2)
  @IsNotEmpty()
  _1aInstrucao: string = '00';

  /**
   * Segunda instrução. Valor padrão é '0'.
   * @type {string}
   */
  @Decorators.PropertyPosition(159, 159, false)
  @MaxLength(1)
  @IsNotEmpty()
  _2aInstrucao: string = '0';

  /**
   * Tipo de pessoa do cedente. Valor padrão é '02'.
   * @type {string}
   */
  @Decorators.PropertyPosition(160, 161, true, {
    allowLeadingZeros: true,
    alphanumerics: true,
  })
  @MaxLength(2)
  @IsNotEmpty()
  TipoPessoaCedente: string = '02';

  /**
   * Zeros (preenchimento). Valor padrão é '000000000000'.
   * @type {string}
   */
  @Decorators.PropertyPosition(162, 173, false)
  @MaxLength(12)
  @IsNotEmpty()
  Zeros162: string = '000000000000';

  /**
   * Número do termo de cessão. Deve ser preenchido.
   * @type {string}
   */
  @Decorators.PropertyPosition(174, 192, true, {
    alphanumerics: true,
    allowLeadingZeros: true,
  })
  @MaxLength(19)
  @IsNotEmpty()
  NumeroTermoCessao: string = '';

  /**
   * Valor presente na parcela. Deve ser preenchido.
   * @type {string}
   */
  @Decorators.PropertyPosition(193, 205, true, { allowLeadingZeros: true })
  @MaxLength(13)
  @IsNotEmpty()
  ValorPresenteParcela: string = '';

  /**
   * Valor do abatimento. Valor padrão é '0000000000000'.
   * @type {string}
   */
  @Decorators.PropertyPosition(206, 218, false, { allowLeadingZeros: true })
  @IsOptional()
  ValorAbatimento: string = '';

  /**
   * Identificação do tipo de inscrição do sacado. Deve ser preenchida.
   * @type {string}
   */
  @Decorators.PropertyPosition(219, 220, true)
  @MaxLength(2)
  @IsNotEmpty()
  IdentificacaoTipoInscricaoSacado: string = '01';

  /**
   * Número de inscrição do sacado. Deve ser preenchido.
   * @type {string}
   */
  @Decorators.PropertyPosition(221, 234, true, {
    allowLeadingZeros: true,
    alphanumerics: true,
  })
  @MaxLength(14)
  @IsNotEmpty()
  NumeroInscricaoSacado: string = '';

  /**
   * Nome do sacado. Deve ser preenchido.
   * @type {string}
   */
  @Decorators.PropertyPosition(235, 274, true)
  @MaxLength(40)
  NomeSacado: string = '';

  /**
   * Endereço completo do sacado. Deve ser preenchido.
   * @type {string}
   */
  @Decorators.PropertyPosition(275, 314, true, { alphanumerics: false })
  @MaxLength(40)
  EnderecoCompleto: string = '';

  /**
   * Número da nota fiscal ou duplicata. Valor padrão é '' (vazio).
   * @type {string}
   */
  @Decorators.PropertyPosition(315, 323, true)
  @IsEmpty()
  NumeroNotaFiscalDuplicata: string = '';

  /**
   * Número de série da nota fiscal ou duplicata. Valor padrão é '' (vazio).
   * @type {string}
   */
  @Decorators.PropertyPosition(324, 326, false)
  @IsOptional()
  @MaxLength(3)
  NumeroSerieNotaFiscalDuplicata: string = '';

  /**
   * CEP. Deve ser preenchido.
   * @type {string}
   */
  @Decorators.PropertyPosition(327, 334, true, { alphanumerics: true })
  @MaxLength(8)
  @IsNotEmpty()
  Cep: string = '';

  /**
   * Cedente. Deve ser preenchido.
   * @type {string}
   */
  @Decorators.PropertyPosition(335, 394, false)
  @MaxLength(60)
  @IsNotEmpty()
  Cedente: string = '';

  /**
   * Chave da nota fiscal. Valor padrão é '' (vazio).
   * @type {string}
   */
  @Decorators.PropertyPosition(395, 438, false)
  @MaxLength(44)
  ChaveNota: string = '';

  /**
   * Número sequencial do registro. Deve ser preenchido.
   * @type {string}
   */
  @Decorators.PropertyPosition(439, 444, true, { allowLeadingZeros: true })
  @MaxLength(6)
  @IsNotEmpty()
  NumeroSequencialRegistro: string = '';

  constructor(props: Partial<BaseRegistroTransacao>) {
    Object.assign(this, props);
  }

  /**
   * Valida os dados da instância usando class-validator.
   * @throws {Error} Se houver erros de validação.
   */
  public validate(): void {
    const instance = plainToClass(RegistroTransacao, this);

    const errors = validateSync(instance);

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }
  }
}
