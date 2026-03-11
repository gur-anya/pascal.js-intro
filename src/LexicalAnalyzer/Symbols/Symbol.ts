import { SymbolBase } from './SymbolBase';

export class Symbol extends SymbolBase
{
    constructor(symbolCode, stringValue, line, column)
    {
        super(symbolCode, stringValue, stringValue, line, column);
    }
}