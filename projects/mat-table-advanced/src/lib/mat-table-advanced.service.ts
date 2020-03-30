import { Injectable } from "@angular/core";
import { tableSymbol } from "./decorators/table";

@Injectable({
  providedIn: "root"
})
export class MatTableAdvancedService {
  getColumnsOfType<T>(type: T) {
    return (type as any).prototype[tableSymbol].columns;
  }
  constructor() {}
}
