import 'reflect-metadata';
import { RegistroHeaderLabel } from '@/cnab/444/registro-header-label';
import { RegistroTransacao } from '@/cnab/444/registro-transacao';
import { RegistroTrailer } from '@/cnab/444/registro-trailer';
import { Crlf, Metadata } from '@/helpers';

export class Cnab444 {
  constructor(
    private readonly header: RegistroHeaderLabel,
    private readonly transactions: Array<RegistroTransacao>,
    private readonly trailer: RegistroTrailer,
  ) {
    this.validate();
  }

  public validate(): void {
    this.header.validate();

    for (const transaction of this.transactions) {
      transaction.validate();
    }

    this.trailer.validate();
  }

  public file(): string {
    const header: string = Metadata.get.call(this.header);

    const transactions: Array<string> = this.transactions.map((transaction) =>
      Metadata.get.call(transaction),
    );

    const trailer = this.trailer.Valor;

    const cnab = [header, ...transactions, trailer].join('\n');

    return Crlf.parse(cnab);
  }
}
