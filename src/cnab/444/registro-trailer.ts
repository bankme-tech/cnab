import { BaseTrailer } from '@/cnab/444/interfaces/base-trailer';
import { plainToClass } from 'class-transformer';
import { IsNotEmpty, Length, validateSync } from 'class-validator';

export class RegistroTrailer implements BaseTrailer {
  @Length(1, 1)
  @IsNotEmpty()
  Valor: string = '9';

  constructor(props?: Partial<BaseTrailer>) {
    Object.assign(this, props);
  }

  public validate(): void {
    const instance = plainToClass(RegistroTrailer, this);

    const errors = validateSync(instance);

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }
  }
}
