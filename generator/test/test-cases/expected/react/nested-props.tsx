export declare type GridColumnType = {
  name: string;
  index: number;
  editing?: typeof ColumnEditing;
  defaultIndex?: number;
  indexChange?: (index: number) => void;
  children?: React.ReactNode;
};
export const GridColumn: GridColumnType = {
  name: "",
  index: 0,
  editing: {},
  defaultIndex: 0,
  indexChange: () => {},
};
export declare type CustomType = {};
export const Custom: CustomType = {};
export declare type AnotherCustomType = {};
export const AnotherCustom: AnotherCustomType = {};
export declare type EditingType = {
  editEnabled?: boolean;
  custom?: typeof Custom[];
  anotherCustom?: typeof AnotherCustom;
  children?: React.ReactNode;
};
export const Editing: EditingType = {
  editEnabled: false,
  custom: [],
  anotherCustom: {},
};
export declare type ColumnEditingType = {
  editEnabled?: boolean;
};
export const ColumnEditing: ColumnEditingType = {
  editEnabled: false,
};
export declare type WidgetInputType = {
  columns?: Array<typeof GridColumn | string>;
  editing?: typeof Editing;
  children?: React.ReactNode;
};
export const WidgetInput: WidgetInputType = {};
