
import fs from 'fs';

export class FileIO {
    charPointer: number;
    text: string;
    line: number;
    column: number;

    constructor(fileName) {
        this.charPointer = 0;
        this.text = fs.readFileSync(fileName, 'utf-8');
        this.line = 1;
        this.column = 1;
    }

    nextCh() {
        if (this.charPointer >= this.text.length) {
            return null;
        }
        const ch = this.text[this.charPointer++];
        if (ch === '\n') {
            this.line++;
            this.column = 0;
        } else {
            this.column++;
        }
        return ch;
    }
}