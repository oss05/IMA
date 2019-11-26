export class Archive {
    constructor(
      // tslint:disable-next-line: variable-name
      public _id: string,
      public name: string,
      public content: string,
      public category: string,
      public section: string,
      public path: string,
      public original: string
    ) { }
}