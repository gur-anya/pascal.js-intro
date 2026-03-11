import { TreeNodeBase } from './TreeNodeBase';
import { SymbolBase } from '../../LexicalAnalyzer/Symbols/SymbolBase';
 
export class Assignment extends TreeNodeBase { //узел операции присваивания

    left: TreeNodeBase;
    right: TreeNodeBase;

    constructor(symbol: SymbolBase, left: TreeNodeBase, right: TreeNodeBase) {
        super(symbol);
        this.left = left;
        this.right = right;
    }
} 