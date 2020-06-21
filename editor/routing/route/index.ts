export type Route<TParameters> = {
  readonly parameters: TParameters;
  view(parameters: TParameters): JSX.Element;
};
