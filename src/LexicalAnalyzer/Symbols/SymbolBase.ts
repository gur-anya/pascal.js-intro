import { SymbolsCodes } from "../SymbolsCodes";

export class SymbolBase
{

    symbolCode: SymbolsCodes;
    stringValue: SymbolsCodes;
    value: number;
    line: number;
    column: number;

    /**
     * @todo Разобраться тут с типами - почему дублируются
     */
    constructor(symbolCode: SymbolsCodes, stringValue: string, value: number, line: number, column: number)
    {
        this.symbolCode = symbolCode;
        this.stringValue = symbolCode;
        this.value = value;
        this.line = line;
        this.column = column;
    }
}