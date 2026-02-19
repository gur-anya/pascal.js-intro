import { SymbolBase } from '../../LexicalAnalyzer/Symbols/SymbolBase';
import { TreeNodeBase } from './TreeNodeBase';
export class UnaryMinus extends TreeNodeBase {

    operand: TreeNodeBase;

    constructor(symbol: SymbolBase, operand: TreeNodeBase) {
        super(symbol);
        this.operand = operand;
    }
}