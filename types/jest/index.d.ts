declare module "@jest/schemas" {

  export type TString = { kind: "TString"; type: "string" };
  export type TReadonlyOptional<T> = T;

  export const SnapshotFormat: {
    comment: TReadonlyOptional<TString>;
    content: TReadonlyOptional<TString>;
    prop: TReadonlyOptional<TString>;
    tag: TReadonlyOptional<TString>;
    value: TReadonlyOptional<TString>;
  };
}

declare module "@jest/types" {
}
