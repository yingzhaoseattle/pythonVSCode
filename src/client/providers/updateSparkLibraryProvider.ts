"use strict";
 import * as vscode from "vscode";

 export function activateUpdateSparkLibraryProvider(): vscode.Disposable {
     return vscode.commands.registerCommand("python.updateSparkLibrary", updateSparkLibrary);
 }

function updateSparkLibrary() {
    const pythonConfig = vscode.workspace.getConfiguration('python');
    pythonConfig.update('autoComplete.extraPaths', ["${env.SPARK_HOME}/python", 
     "${env.SPARK_HOME}/python/pyspark", "${env.SPARK_HOME}/python/lib/py4j-0.10.3-src.zip"]).then(() => {
         //Done
     }, reason => {
         vscode.window.showErrorMessage(`Failed to set 'autoComplete.extraPaths'. Error: ${reason.message}`);
         console.error(reason);
     });
}