declare module 'cron-parser' {
  interface CronFieldOptions {
    rawValue: string;
  }

  interface CronField {
    options?: CronFieldOptions;
  }

  interface CronFieldCollection {
    second: CronField;
    minute: CronField;
    hour: CronField;
    dayOfMonth: CronField;
    month: CronField;
    dayOfWeek: CronField;
  }

  interface CronExpression {
    fields: CronFieldCollection;
    next(): Date;
    prev(): Date;
    hasPrev(): boolean;
    reset(): void;
    stringify(): string;
  }

  export class CronExpressionParser {
    static parse(
      expression: string,
      options?: Record<string, unknown>,
    ): CronExpression;
  }
}
