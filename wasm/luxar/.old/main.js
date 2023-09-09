/**
 *  Javascript main file: main.js
 *  WebAssembly main file: src/index.ts
 *  WebAssembly loader: loader.js
 * 
 * */

import { Wasmer } from "../loader.js";

export function main() {
    let x = Wasmer.add(3,2)
    console.log(x)
}