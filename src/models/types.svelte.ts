export type Mapping = {
  account: string;
  code: string;
  keywords: string[];
};

export type Account = {
  Account: string | undefined;
  Code: string | undefined;
  'Line Descr': string;
  Supplier: string;
  'Long Descr': string;
  Name: string;
};

export class AppState {
  public config: Mapping[] = $state([]);
  public data: Account[] = $state([]);
  public progress: number = $state.raw(0);
  public loading: boolean = $state.raw(false);
  public error: string = $state('');
}
