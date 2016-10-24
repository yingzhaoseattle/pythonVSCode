import * as vscode from 'vscode';

export class MockOutputChannel implements vscode.OutputChannel {
    constructor(name: string) {
        this.name = name;
        this.output = '';
    }
    public writeToConsole: boolean;
    name: string;
    output: string;
    isShown: boolean;
    append(value: string) {
        this.output += value;
        if (this.writeToConsole) {
            console.log(value);
        }
    }
    appendLine(value: string) {
        this.append(value); this.append('\n');
        if (this.writeToConsole) {
            console.log(value);
            console.log('\n');
        }
    }
    clear() { }
    show(preservceFocus?: boolean): void;
    show(column?: vscode.ViewColumn, preserveFocus?: boolean): void;
    show(x?: any, y?: any): void {
        this.isShown = true;
    }
    hide() {
        this.isShown = false;
    }
    dispose() { }
}
