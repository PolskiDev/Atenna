// Presume que o ficheiro `add.wasm` existe e que contém uma única função somando dois argumentos fornecidos
import * as fs from 'fs'
import * as Wasm from './main.js'

export let Wasmer

const wasmBuffer = fs.readFileSync('./build/index.wasm');
WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
  // A função exportada mora sob a `instance.exports`
  Wasmer = wasmModule.instance.exports;
  Wasm.main()
});