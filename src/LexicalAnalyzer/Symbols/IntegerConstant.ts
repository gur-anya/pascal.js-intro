import { SymbolsCodes } from '../SymbolsCodes';
import { SymbolBase } from './SymbolBase';

export class IntegerConstant extends SymbolBase
{
    /**
     * 
     * @todo Не надо ли тут зафиксировать symbolCode ?

     */

    constructor(symbolCode: SymbolsCodes, stringValue: string, line: number, column: number) {
        super(symbolCode, stringValue, Number.parseInt(stringValue), line, column);
    }
}