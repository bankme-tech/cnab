import { Cnab444 } from '@/cnab/444';
import { RegistroHeaderLabel } from '@/cnab/444/registro-header-label';
import { RegistroTrailer } from '@/cnab/444/registro-trailer';
import { RegistroTransacao } from '@/cnab/444/registro-transacao';
import { faker } from '@faker-js/faker';

const razaoSocial = faker.string.alphanumeric(20);

const header = new RegistroHeaderLabel({
  CodigoOriginador: razaoSocial,
  CodigoServico: '01',
  DataGravacaoArquivo: '080823',
  LiteralRemessa: 'REMESSA',
  NomeOriginador: 'Fulano de Tal',
  LiteralServico: 'COBRANCA',
  NumeroSequencialArquivo: '0005133',
  IdentificacaoArquivoRemessa: '1',
  NumeroSequencialRegistro: '000001',
  IdentificacaoRegistro: '0',
  IdentificacaoSistema: 'MX',
  NomeBanco: 'PAULISTA SA',
  NumeroBanco: '611',
});

header.validate();

const cep = faker.location.zipCode().slice(0, 5);
const cedente = faker.company.name();
const enderecoCompleto = faker.location.streetAddress().slice(0, 40);
const nomeSacado = faker.person.fullName().slice(0, 40);
const numeroInscricaoSacado = faker.number.int(11).toString();
const valorTitulo = faker.number.int(10).toString();
const numeroControleParticipante = faker.string.alpha(25);
const numeroDocumento = faker.string.alpha(10);
const dataVencimento = '070823';

const _1 = new RegistroTransacao({
  _1aInstrucao: '00',
  _2aInstrucao: '0',
  Cep: cep,
  Cedente: cedente,
  ChaveNota: '',
  DataEmissaoTitulo: '070822',
  EnderecoCompleto: enderecoCompleto,
  EspecieTitulo: '06',
  Identificacao: '1',
  IdentificacaoTipoInscricaoSacado: '01',
  NomeSacado: nomeSacado,
  NumeroInscricaoSacado: numeroInscricaoSacado,
  NumeroNotaFiscalDuplicata: '',
  NumeroSerieNotaFiscalDuplicata: '',
  NumeroSequencialRegistro: '2',
  AgenciaDepositaria: '00000',
  ValorTitulo: valorTitulo,
  NumeroControleParticipante: numeroControleParticipante,
  NumeroDocumento: numeroDocumento,
  DataVencimentoTitulo: dataVencimento,
});

const _2 = new RegistroTransacao({
  _1aInstrucao: '00',
  _2aInstrucao: '0',
  Cep: cep,
  Cedente: cedente,
  ChaveNota: '',
  DataEmissaoTitulo: '070822',
  EnderecoCompleto: enderecoCompleto,
  EspecieTitulo: '06',
  Identificacao: '1',
  IdentificacaoTipoInscricaoSacado: '01',
  NomeSacado: nomeSacado,
  NumeroInscricaoSacado: numeroInscricaoSacado,
  NumeroNotaFiscalDuplicata: '',
  NumeroSerieNotaFiscalDuplicata: '',
  NumeroSequencialRegistro: '3',
  AgenciaDepositaria: '00000',
  ValorTitulo: valorTitulo,
  NumeroControleParticipante: numeroControleParticipante,
  NumeroDocumento: numeroDocumento,
  DataVencimentoTitulo: dataVencimento,
});

const transactions = [_1, _2];

for (const transaction of transactions) {
  transaction.validate();
}

const trailer = new RegistroTrailer();

const cnab = new Cnab444(header, transactions, trailer);

console.info(cnab.file());
cnab.save();
