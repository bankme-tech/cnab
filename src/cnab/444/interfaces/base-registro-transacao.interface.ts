import { BaseRegistroLayout } from '@/cnab/444/interfaces/base-registro-layout.interface';

export interface BaseRegistroTransacao extends BaseRegistroLayout {
  /**
   * Identificação do Registro.
   * @example '0'
   */
  IdentificacaoRegistro: string;

  /**
   * Indica se há Débito Automático.
   * @example ' '
   */
  DebitoAutomatico: string;

  /**
   * Coobrigação.
   * @example '02'
   */
  Coobrigacao: string;

  /**
   * Característica Especial.
   * @example '00'
   */
  CaracteristicaEspecial: string;

  /**
   * Modalidade da Operação.
   * @example '0000'
   */
  ModalidadeOperacao: string;

  /**
   * Natureza da Operação.
   * @example '00'
   */
  NaturezaOperacao: string;

  /**
   * Origem dos Recursos.
   * @example '0000'
   */
  OrigemRecurso: string;

  /**
   * Classe de Risco da Operação.
   * @example 'A'
   */
  ClasseRiscoOperacao: string;

  /**
   * Número de Controle do Participante.
   * @example 'X13026A19613S126000/001'
   */
  NumeroControleParticipante: string;

  /**
   * Número do Banco.
   * @example '000'
   */
  NumeroBanco: string;

  /**
   * Identificação do Título no Banco.
   * @example '00000000000'
   */
  IdentificacaoTituloBanco: string;

  /**
   * Dígito do Nosso Número.
   * @example ' '
   */
  DigitoNossoNumero: string;

  /**
   * Valor Pago.
   * @example '0000000000'
   */
  ValorPago: string;

  /**
   * Condição de Emissão da Papeleta de Cobrança.
   * @example '0'
   */
  CondicaoEmissaoPapeletaCobranca: string;

  /**
   * Identificação se Emite Papeleta para Débito Automático.
   * @example ''
   */
  IdentificacaoSeEmitePapeletaParaDebitoAutomatico: string;

  /**
   * Data de Liquidação.
   * @example ''
   */
  DataLiquidacao: string;

  /**
   * Identificação da Operação do Banco.
   * @example ' '
   */
  IdentificacaoOperacaoBanco: string;

  /**
   * Indica Rateio de Crédito.
   * @example ' '
   */
  IndicaRateioCredito: string;

  /**
   * Endereçamento para Aviso de Débito Automático em Conta Corrente.
   * @example '0'
   */
  EnderecamentoAvisoDebitoAutomaticoContaCorrente: string;

  /**
   * Identificação da Ocorrência.
   * @example '01'
   */
  IdentificacaoOcorrencia: string;

  /**
   * Número do Documento.
   * @example '000000/001'
   */
  NumeroDocumento: string;

  /**
   * Data de Vencimento do Título.
   * @example '090923'
   */
  DataVencimentoTitulo: string;

  /**
   * Valor do Título.
   * @example '0000000109154'
   */
  ValorTitulo: string;

  /**
   * Banco Encarregado da Cobrança.
   * @example '000'
   */
  BancoEncarregadoCobranca: string;

  /**
   * Agência Depositária.
   * @example '00000'
   */
  AgenciaDepositaria: string;

  /**
   * Espécie do Título.
   * @example '06'
   */
  EspecieTitulo: string;

  /**
   * Identificação.
   * @example '1'
   */
  Identificacao: string;

  /**
   * Data de Emissão do Título.
   * @example '070822'
   */
  DataEmissaoTitulo: string;

  /**
   * 1ª Instrução.
   * @example '00'
   */
  _1aInstrucao: string;

  /**
   * 2ª Instrução.
   * @example '0'
   */
  _2aInstrucao: string;

  /**
   * Tipo de Pessoa do Cedente.
   * @example '02'
   */
  TipoPessoaCedente: string;

  /**
   * Número do Termo de Cessão.
   * @example '1301I198613S23631'
   */
  NumeroTermoCessao: string;

  /**
   * Valor Presente da Parcela.
   * @example '0000000395318'
   */
  ValorPresenteParcela: string;

  /**
   * Valor de Abatimento.
   * @example '0000000000000'
   */
  ValorAbatimento: string;

  /**
   * Identificação do Tipo de Inscrição do Sacado.
   * @example '01'
   */
  IdentificacaoTipoInscricaoSacado: string;

  /**
   * Número de Inscrição do Sacado.
   * @example '00001122031141'
   */
  NumeroInscricaoSacado: string;

  /**
   * Nome do Sacado.
   * @example 'KEVEN LUCAS SANTOS MIANO'
   */
  NomeSacado: string;

  /**
   * Endereço Completo.
   * @example 'Rua Fulano de Tal, 811, Apto 1, Beltrano'
   */
  EnderecoCompleto: string;

  /**
   * Número da Nota Fiscal ou Duplicata.
   * @example ''
   */
  NumeroNotaFiscalDuplicata: string;

  /**
   * Número de Série da Nota Fiscal ou Duplicata.
   * @example ''
   */
  NumeroSerieNotaFiscalDuplicata: string;

  /**
   * CEP.
   * @example '24145214'
   */
  Cep: string;

  /**
   * Cedente.
   * @example 'TESTE INSTITUICAO DE PAGAMENTO S.A.'
   */
  Cedente: string;

  /**
   * Chave da Nota.
   * @example ''
   */
  ChaveNota: string;

  /**
   * Número Sequencial do Registro.
   * @example ''
   */
  NumeroSequencialRegistro: string;
}
