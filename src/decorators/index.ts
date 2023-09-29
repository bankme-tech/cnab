namespace Decorators {
  export function PropertyPosition(
    start: number,
    end: number,
    required: boolean,
    options?: { allowLeadingZeros?: boolean; alphanumerics?: boolean },
  ) {
    return function (target: any, propertyKey: string) {
      Reflect.defineMetadata(
        `Field_${propertyKey}`,
        { start, end, required, fieldName: propertyKey, ...options },
        target,
      );

      const privateFieldName = `_${propertyKey}`;

      Object.defineProperty(target, propertyKey, {
        get: function () {
          const metadata = Reflect.getMetadata(`Field_${propertyKey}`, this);
          if (metadata) {
            let rawValue = String(this[privateFieldName]);

            if (options?.alphanumerics) {
              rawValue = rawValue.replace(/[.,]/g, '');
            }

            if (options?.allowLeadingZeros) {
              rawValue = rawValue.padStart(
                metadata.end - metadata.start + 1,
                '0',
              );
            }

            return rawValue;
          } else {
            return this[privateFieldName];
          }
        },
        set: function (value: string) {
          this[privateFieldName] = value;
        },
        enumerable: true,
        configurable: true,
      });
    };
  }
}

export { Decorators };
