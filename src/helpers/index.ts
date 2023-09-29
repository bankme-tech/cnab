import { writeFileSync } from 'fs';

namespace Helpers {
  export class Metadata {
    public static get<T, K = Record<string, any>>(this: T): string {
      const data: K = {} as K;

      for (const key of Object.keys(this)) {
        const metadataKey = `Field${key}`;
        const fieldMetadata: K | undefined = Reflect.getMetadata(
          metadataKey,
          this,
        );

        if (fieldMetadata) {
          data[key] = fieldMetadata;
        }
      }

      const sortedFields = Object.values(data).sort(
        (a, b) => a.start - b.start,
      );

      let output = '';

      for (const field of sortedFields) {
        const { start, end, fieldName } = field;

        const value = this[fieldName].toString().padEnd(end - start + 1, ' ');

        output += value;
      }

      return output;
    }
  }

  export class Crlf {
    public static parse(string: string): string {
      return string.replace(/\n/g, '\r\n');
    }
  }

  export class File {
    public static save(string: string, filename: string): void {
      writeFileSync(filename, string);
    }
  }
}

export { Helpers };
