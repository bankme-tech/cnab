import 'reflect-metadata';
import { Helpers } from '@/helpers';
import { RegistroHeaderLabel } from '@/cnab/444/registro-header-label';
import { RegistroTransacao } from '@/cnab/444/registro-transacao';
import { RegistroTrailer } from '@/cnab/444/registro-trailer';

export class Cnab444 {
  constructor(
    private readonly header: RegistroHeaderLabel,
    private readonly transactions: Array<RegistroTransacao>,
    private readonly trailer: RegistroTrailer,
  ) {}

  public file(): string {
    const header: string = Helpers.Metadata.get.call(this.header);

    const transactions: Array<string> = this.transactions.map((transaction) =>
      Helpers.Metadata.get.call(transaction),
    );

    const trailer = this.trailer.Valor;

    const cnab = [header, ...transactions, trailer].join('\n');

    return Helpers.Crlf.parse(cnab);
  }

  public save(): void {
    const filename = `CNAB444_${this.header.CodigoOriginador}_${this.header.DataGravacaoArquivo}.txt`;
    return Helpers.File.save(this.file(), `./tmp/${filename}`);
  }
}
