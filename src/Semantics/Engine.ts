import { Addition } from '../SyntaxAnalyzer/Tree/Addition';
import { Multiplication } from '../SyntaxAnalyzer/Tree/Multiplication';
import { Subtraction } from '../SyntaxAnalyzer/Tree/Subtraction';
import { Division } from '../SyntaxAnalyzer/Tree/Division';
import { NumberConstant } from '../SyntaxAnalyzer/Tree/NumberConstant';
import { NumberVariable } from './Variables/NumberVariable';
import { TreeNodeBase } from '../SyntaxAnalyzer/Tree/TreeNodeBase';
import { UnaryMinus } from '../SyntaxAnalyzer/Tree/UnaryMinus';
import { Variable } from 'src/SyntaxAnalyzer/Tree/Variable';
import { Assignment } from 'src/SyntaxAnalyzer/Tree/Assigment';

export class Engine {
    /**
     * Результаты вычислений (изначально - один для каждой строки)
     */
    results: number[];

    /**
     * Деревья, которые получает на вход движок,
     * тип в данном случае определен как TreeNodeBase, потому что на верхнем уровне любого уровня 
     * лежит какой-то узел, описывающий по сути "последнюю" по вложенности операцию
     */
    trees: TreeNodeBase[];
    variables: { [name: string]: number };
    constructor(trees: TreeNodeBase[]) {
        this.trees = trees;
        this.results = [];
        this.variables = {}; 
    }

    run() {
        let self = this;

        this.trees.forEach(

            function (tree) {
                let result = self.evaluateSimpleExpression(tree);
                console.log(result.value);
                self.results.push(result.value); // пишем в массив результатов
            }
        );

    }

    evaluateSimpleExpression(expression: TreeNodeBase): NumberVariable {

        //сохранение значения переменной в хранилище при присваивании
        if (expression instanceof Assignment) {
            const value = this.evaluateSimpleExpression(expression.right);
            const name = expression.left.symbol.value;
            this.variables[name] = value.value;
            return value;
        }
        
        if (expression instanceof Addition
            || expression instanceof Subtraction) {

            let leftOperand = this.evaluateSimpleExpression(expression.left);
            let rightOperand = this.evaluateSimpleExpression(expression.right);

            let result: number | null = null;
            if (expression instanceof Addition) {
                result = leftOperand.value + rightOperand.value;
            } else if (expression instanceof Subtraction) {
                result = leftOperand.value - rightOperand.value;
            }

            return new NumberVariable(result as number);
 
        } else {
            return this.evaluateTerm(expression);
        }
    }

    evaluateTerm(expression: TreeNodeBase) {
        if (expression instanceof Multiplication) {
            let leftOperand = this.evaluateTerm(expression.left);
            let rightOperand = this.evaluateTerm(expression.right);

            let result = leftOperand.value * rightOperand.value;

            return new NumberVariable(result);
        } else if (expression instanceof Division) {
            let leftOperand = this.evaluateTerm(expression.left);
            let rightOperand = this.evaluateTerm(expression.right);
            let result = leftOperand.value / rightOperand.value;

            return new NumberVariable(result);
        } else {
            return this.evaluateMultiplier(expression);
        }
    }

    evaluateMultiplier(expression: TreeNodeBase) {
        //расчитываем выражение с унарным минусом рекурсивно на случай нескольких унарных минусов, например
        if (expression instanceof UnaryMinus) {
            const operand = this.evaluateMultiplier(expression.operand);
            return new NumberVariable(-operand.value);
        }
        // переменная
        if (expression instanceof Variable) {
            const name = expression.symbol.value;
            if (!(name in this.variables)) {
                throw `Variable ${name} not initialized at line ${expression.symbol.line} col ${expression.symbol.column}`;;
            }
            return new NumberVariable(this.variables[name]);
        }

        if (expression instanceof NumberConstant) {
            return new NumberVariable(expression.symbol.value);
        } else {
            return this.evaluateSimpleExpression(expression);
        }
    }
};