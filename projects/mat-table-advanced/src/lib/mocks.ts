import { Column } from "./decorators/column";
import { ColumnModel } from "./models/column.model";
import { Table } from "./decorators/table";

export const mockColumnOptions: ColumnModel = new ColumnModel({
  key: "foo",
  verboseName: "Foo",
  canSort: false,
  format: null,
  order: 0,
  propertyAccessor: null,
  propertyType: "String",
  visible: true,
  sortBy: null,
  sortByAccessor: null
});
@Table
export class MockClass {
  @Column(mockColumnOptions)
  foo: string;
}
export const mockData = [[{ foo: "Test value" }]];
