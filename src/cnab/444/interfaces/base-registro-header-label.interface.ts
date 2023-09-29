/**
 * Interface que define a estrutura de um registro de cabeçalho em um arquivo CNAB 444.
 */
export interface BaseRegistroHeaderLabel {
  /**
   * Identificação do registro.
   * @example '0'
   */
  IdentificacaoRegistro: string;

  /**
   * Identificação do arquivo de remessa.
   * @example '1'
   */
  IdentificacaoArquivoRemessa: string;

  /**
   * Descrição literal da remessa.
   * @example 'REMESSA'
   */
  LiteralRemessa: string;

  /**
   * Código do serviço.
   * @example '01'
   */
  CodigoServico: string;

  /**
   * Descrição literal do serviço.
   * @example 'COBRANCA'
   */
  LiteralServico: string;

  /**
   * Código do originador.
   * @example '123456'
   */
  CodigoOriginador: string;

  /**
   * Nome do originador.
   * @example 'Fulano de Tal'
   */
  NomeOriginador: string;

  /**
   * Número do banco.
   * @example '611'
   */
  NumeroBanco: string;

  /**
   * Nome do banco.
   * @example 'PAULISTA S A'
   */
  NomeBanco: string;

  /**
   * Data de gravação do arquivo.
   * @example '210928'
   */
  DataGravacaoArquivo: string;

  /**
   * Identificação do sistema.
   * @example 'MX'
   */
  IdentificacaoSistema: string;

  /**
   * Número sequencial do arquivo.
   * @example '0005133'
   */
  NumeroSequencialArquivo: string;

  /**
   * Número sequencial do registro.
   * @example '000002'
   */
  NumeroSequencialRegistro: string;
}
