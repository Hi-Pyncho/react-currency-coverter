 export type ISymbolItem = [string, string]
 export type ISymbolList = ISymbolItem[]
 export type IMUISelect = React.ChangeEvent<{
  name?: string | undefined;
  value: unknown;
}>