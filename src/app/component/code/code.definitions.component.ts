export enum CodeTypeEnum {
  Terminal = 'Terminal',
  JavaScript = 'JavaScript',
  TypeScript = 'TypeScript',
  JSON = 'JSON',
  SCSS = 'SCSS',
  HTML = 'HTML'
}

export interface ICodeType {
  JSON?: string;
  JavaScript?: string;
  TypeScript?: string;
  SCSS?: string;
  HTML?: string;
}

export interface ICode {
  name: string;
  code: string | object;
  type?: CodeTypeEnum;
}
